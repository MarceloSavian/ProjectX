const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const Pool = require('pg').Pool

const { ErrorFunctions, ERRORS } = require('./Services/ErrorService');
const errorService = new ErrorFunctions();

const AdvocacyService = require('./Services/AdvocacyService')
const UserService = require('./Services/UserService')
const CashierService = require('./Services/CashierService')
const AuthService = require('./Services/AuthService')
const MovementTypeService = require('./Services/MovementTypeService')

//Config banco
const query = new Pool({
  user: 'sysadm',
  host: '192.168.0.253',
  database: 'sysadm',
  password: 'R00tk1t!',
  port: 5432
});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

function checkRequisitionType (body){
  if(body.body !== undefined){
      return JSON.parse(body.body);
  } else {
      return body
  }
}

function formatResponseHtml(success, responseJson, error, bolObject) {
  if (success) {
      //se for objeto  tipo imagem,arquivo, nao passa pelo JSON.stringify
      let jsonString = (bolObject == null || bolObject === undefined || bolObject == false || responseJson != {} ) 
          ? JSON.stringify(responseJson)
          : responseJson;

      return {sucess: true, error: [], jsonData: jsonString == "{}" ? '' : jsonString };
  }
  else {
      let errorResponse = error;

      //resposta do erro no formato ingles, converte para o portugues
      if (error.code !== undefined) {
          errorResponse = { codigoErro: error.code, descricao: error.description, complemento: error.complement };
      }

      return { sucesso: false, erros: [errorResponse], jsonDados: '' };
  }
}

/*
* Função que insere uma nova Advocacia, sempre com status 1 de ativo
* url: link/insertAdvocacy
* Method: POST
* Recebe:
*     nameAdvocacy - String - Nome da advocacia
*     addressAdvocacy - String - Endereço da advocacia (Rua)
*     cityAdvocacy - String - Cidade da advocacia
*     bairroAdvocacy - String - Bairro da advocacia
*     ufAdvocacy - String - Uf da advocacia, 2 caracteres
*     phoneAdvocacy - String - Telefone da advocacia
*     cnpjAdvocacy - String - Cnpj da advocacia
*     latitudeAdvocacy - Float - Latitude advocacia
*     longitudeAdvocacy - Float - Longitude advocacia
* Retorna:
*     {success: true ou false, erro:[]}
* Utiliza as funções:
*     insertAdvocacy: AdvocacyService
*/

app.post('/insertAdvocacy', (request, response) => {
    const {nameAdvocacy, addressAdvocacy,cityAdvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy, latitudeAdvocacy, longitudeAdvocacy} = checkRequisitionType(request.body);

    const advocacyService = new AdvocacyService(query);

    advocacyService.insertAdvocacy(nameAdvocacy, addressAdvocacy,cityAdvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy,latitudeAdvocacy,longitudeAdvocacy).then(res => {
      response.send(formatResponseHtml(res.success, res.jsonData, res.error));
    }).catch(e => {
      console.log("erro", e.message);
      response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
    });
})

app.post('/updateAdvocacy', (request, response) => {
  const {idAdvocacy, nameAdvocacy, addressAdvocacy,cityAdvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy, latitudeAdvocacy, longitudeAdvocacy} = checkRequisitionType(request.body);

  const advocacyService = new AdvocacyService(query);

  advocacyService.updateAdvocacy(idAdvocacy, nameAdvocacy, addressAdvocacy,cityAdvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy,latitudeAdvocacy,longitudeAdvocacy).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.post('/deleteAdvocacy', (request, response) => {
  const {idAdvocacy} = checkRequisitionType(request.body);

  const advocacyService = new AdvocacyService(query);

  advocacyService.deleteAdvocacy(idAdvocacy).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.get('/selectAllAdvocacies', (request, response) => {
  
  const advocacyService = new AdvocacyService(query);

  advocacyService.selectAllAdvocacies().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.post('/selectAdvocacy', (request, response) => {
  const {idAdvocacy} = checkRequisitionType(request.body);

  const advocacyService = new AdvocacyService(query);

  advocacyService.selectAdvocacy(idAdvocacy).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.post('/insertUser', (request, response) => {
  const {nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId} = checkRequisitionType(request.body);

  const userService = new UserService(query);

  userService.insertUser(nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.post('/updateUser', (request, response) => {
  const {nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId, idUser} = checkRequisitionType(request.body);

  const userService = new UserService(query);

  userService.updateUser(nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId, idUser).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.get('/selectAllUsers', (request, response) => {
  const userService = new UserService(query);

  userService.selectAllUsers().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.delete('/deleteUser', (request, response) => {
  const {idUser} = checkRequisitionType(request.query);

  const userService = new UserService(query);

  userService.deleteUser(idUser).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.post('/userLogin', (request, response) => {
  const {email, password} = checkRequisitionType(request.body);

  const authService = new AuthService(query);

  authService.userLogin(email, password).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  }).catch(e => {
    console.log("erro", e.message);
    response.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
  });
})

app.post('/insertCashier', (request, response) => {
  const {idAdvocacypk, nameCashier, currentMoney,statusCashier} = checkRequisitionType(request.body);

  const cashierService = new CashierService (query);

  cashierService.insertCashier(idAdvocacypk, nameCashier, currentMoney,statusCashier).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/deleteCashier', (request, response) => {
  const {idCashier} = checkRequisitionType(request.body);

  const cashierService = new CashierService (query);

  cashierService.deleteCashier(idCashier).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.get('/selectAllCashiers', (request, response) => {

  const cashierService = new CashierService(query);

  cashierService.selectAllCashiers().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/updateCashier', (request, response) => {
  const {idCashier, idAdvocacypk, nameCashier, currentMoney,statusCashier} = checkRequisitionType(request.body);

  const cashierService = new CashierService(query);

  cashierService.updateCashier(idCashier, idAdvocacypk, nameCashier, currentMoney,statusCashier).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/insertMovementType', (request, response) => {
  const {nameMovementType, typeMovementType, statusMovementType, idAdvocacyfk} = checkRequisitionType(request.body);

  const movementTypeService = new MovementTypeService(query);

  movementTypeService.insertMovementType(nameMovementType, typeMovementType, statusMovementType, idAdvocacyfk).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/updateMovementType', (request, response) => {
  const {idMovementType, nameMovementType, typeMovementType, statusMovementType} = checkRequisitionType(request.body);

  const movementTypeService = new MovementTypeService(query);

  movementTypeService.updateMovementType(idMovementType, nameMovementType, typeMovementType, statusMovementType).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.get('/getMovementTypes', (request, response) => {
  const {advocacyId} = checkRequisitionType(request.query);

  const movementTypeService = new MovementTypeService(query);

  movementTypeService.getMovementTypes(advocacyId).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.listen(port, () => {})