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
const AreaLitigationService = require('./Services/AreaLitigationService')
const FaseLitigationService = require('./Services/FaseLitigationService')
const InstanciaLitigationService = require('./Services/InstanciaLitigationService')
const StatusLitigationService = require('./Services/StatusLitigationService')
const TypeLitigationService = require('./Services/TypeLitigationService')
const TaskTypeService = require('./Services/TaskTypeService')
const CashFlowService = require('./Services/CashFlowService')
const MovementsService = require('./Services/MovementsService')
const CustomerService = require('./Services/CustomerService')

//Config banco
const query = new Pool({
  user: 'sysadm',
  host: 'dobkovski.com',
  database: 'sysadm',
  password: 'R00tk1t!',
  port: 9090
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
  })
})
app.post('/insertAreaLitigation', (request, response) => {
  const {nameAreaLitigation, descriptionAreaLitigation} = checkRequisitionType(request.body);

  const areaLitigation = new AreaLitigationService (query);

  areaLitigation.insertAreaLitigation(nameAreaLitigation, descriptionAreaLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})
app.post('/deleteAreaLitigation', (request, response) => {
  const {idAreaLitigation} = checkRequisitionType(request.body);

  const areaLitigation = new AreaLitigationService (query);

  areaLitigation.deleteAreaLitigation(idAreaLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})
app.get('/selectAreaLitigation', (request, response) => {

  const areaLitigation = new AreaLitigationService (query);

  areaLitigation.selectAreaLitigation().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})
app.post('/updateAreaLitigation', (request, response) => {
  const {idAreaLitigation, nameAreaLitigation, descriptionAreaLitigation} = checkRequisitionType(request.body);

  const areaLitigation = new AreaLitigationService (query);

  areaLitigation.updateAreaLitigation(idAreaLitigation, nameAreaLitigation, descriptionAreaLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/insertFaseLitigation', (request, response) => {
  const {nameFaseLitigation, descriptionFaseLitigation} = checkRequisitionType(request.body);

  const faseLitigation = new FaseLitigationService (query);

  faseLitigation.insertFaseLitigation(nameFaseLitigation, descriptionFaseLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/deleteFaseLitigation', (request, response) => {
  const {idFaseLitigation} = checkRequisitionType(request.body);

  const faseLitigation = new FaseLitigationService (query);

  faseLitigation.deleteFaseLitigation(idFaseLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.get('/selectFaseLitigation', (request, response) => {

  const faseLitigation = new FaseLitigationService (query);

  faseLitigation.selectFaseLitigation().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/updateFaseLitigation', (request, response) => {
  const {idFaseLitigation, nameFaseLitigation, descriptionFaseLitigation} = checkRequisitionType(request.body);

  const faseLitigation = new FaseLitigationService (query);

  faseLitigation.updateFaseLitigation(idFaseLitigation, nameFaseLitigation, descriptionFaseLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/insertInstanciaLitigation', (request, response) => {
  const {nameInstanciaLitigation, descriptionInstanciaLitigation} = checkRequisitionType(request.body);

  const InstanciaLitigation = new InstanciaLitigationService (query);

  InstanciaLitigation.insertInstanciaLitigation(nameInstanciaLitigation, descriptionInstanciaLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/deleteInstanciaLitigation', (request, response) => {
  const {idInstanciaLitigation} = checkRequisitionType(request.body);

  const InstanciaLitigation = new InstanciaLitigationService (query);

  InstanciaLitigation.deleteInstanciaLitigation(idInstanciaLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.get('/selectInstanciaLitigation', (request, response) => {

  const InstanciaLitigation = new InstanciaLitigationService (query);

  InstanciaLitigation.selectInstanciaLitigation().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/updateInstanciaLitigation', (request, response) => {
  const {idInstanciaLitigation, nameInstanciaLitigation, descriptionInstanciaLitigation} = checkRequisitionType(request.body);

  const InstanciaLitigation = new InstanciaLitigationService (query);

  InstanciaLitigation.updateInstanciaLitigation(idInstanciaLitigation, nameInstanciaLitigation, descriptionInstanciaLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})
app.post('/insertStatusLitigation', (request, response) => {
  const {nameStatusLitigation, descriptionStatusLitigation} = checkRequisitionType(request.body);

  const StatusLitigation = new StatusLitigationService (query);

  StatusLitigation.insertStatusLitigation(nameStatusLitigation, descriptionStatusLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/deleteStatusLitigation', (request, response) => {
  const {idStatusLitigation} = checkRequisitionType(request.body);

  const StatusLitigation = new StatusLitigationService (query);

  StatusLitigation.deleteStatusLitigation(idStatusLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.get('/selectStatusLitigation', (request, response) => {

  const StatusLitigation = new StatusLitigationService (query);

  StatusLitigation.selectStatusLitigation().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/updateStatusLitigation', (request, response) => {
  const {idStatusLitigation, nameStatusLitigation, descriptionStatusLitigation} = checkRequisitionType(request.body);

  const StatusLitigation = new StatusLitigationService (query);

  StatusLitigation.updateStatusLitigation(idStatusLitigation, nameStatusLitigation, descriptionStatusLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/insertTypeLitigation', (request, response) => {
  const {nameTypeLitigation, descriptionTypeLitigation} = checkRequisitionType(request.body);

  const TypeLitigation = new TypeLitigationService (query);

  TypeLitigation.insertTypeLitigation(nameTypeLitigation, descriptionTypeLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/deleteTypeLitigation', (request, response) => {
  const {idTypeLitigation} = checkRequisitionType(request.body);

  const TypeLitigation = new TypeLitigationService (query);

  TypeLitigation.deleteTypeLitigation(idTypeLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.get('/selectTypeLitigation', (request, response) => {

  const TypeLitigation = new TypeLitigationService (query);

  TypeLitigation.selectTypeLitigation().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/updateTypeLitigation', (request, response) => {
  const {idTypeLitigation, nameTypeLitigation, descriptionTypeLitigation} = checkRequisitionType(request.body);

  const TypeLitigation = new TypeLitigationService (query);

  TypeLitigation.updateTypeLitigation(idTypeLitigation, nameTypeLitigation, descriptionTypeLitigation).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/insertTaskType', (request, response) => {
  const {nameTaskType, descriptionTaskType} = checkRequisitionType(request.body);

  const TaskType = new TaskTypeService (query);

  TaskType.insertTaskType(nameTaskType, descriptionTaskType).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/deleteTaskType', (request, response) => {
  const {idTaskType} = checkRequisitionType(request.body);

  const TaskType = new TaskTypeService (query);

  TaskType.deleteTaskType(idTaskType).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.get('/selectTaskType', (request, response) => {

  const TaskType = new TaskTypeService (query);

  TaskType.selectTaskType().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/updateTaskType', (request, response) => {
  const {idTaskType, nameTaskType, descriptionTaskType} = checkRequisitionType(request.body);

  const TaskType = new TaskTypeService (query);

  TaskType.updateTaskType(idTaskType, nameTaskType, descriptionTaskType).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/openCashier', (request, response) => {
  const {idCashier, openedAt, openedBy, initialCash, statusCashFlow} = checkRequisitionType(request.body);

  const cashFlowService = new CashFlowService(query);

  cashFlowService.openCashier(idCashier, openedAt, openedBy, initialCash, statusCashFlow).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/insertMovement', (request, response) => {
  const {idCashFlow, idMovementTypespk, idUserpk, movementTimestamp, value, type} = checkRequisitionType(request.body);

  const movementsService = new MovementsService(query);

  movementsService.insertMovement(idCashFlow, idMovementTypespk, idUserpk, movementTimestamp, value, type).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/closeCashier', (request, response) => {
  const {idCashier, closedBy} = checkRequisitionType(request.body);

  const cashFlowService = new CashFlowService(query);

  cashFlowService.closeCashier(idCashier, closedBy).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/insertCustomer', (request, response) => {
  const {nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer} = checkRequisitionType(request.body);

  const customer = new CustomerService (query);

  customer.insertCustomer(nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/deleteCustomer', (request, response) => {
  const {idCustomer} = checkRequisitionType(request.body);

  const customer = new CustomerService (query);

  customer.deleteCustomer(idCustomer).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.get('/selectCustomer', (request, response) => {

  const customer = new CustomerService (query);

  customer.selectCustomer().then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.post('/updateCustomer', (request, response) => {
  const {idCustomer, nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer} = checkRequisitionType(request.body);

  const customer = new CustomerService (query);

  customer.updateCustomer(idCustomer, nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer).then(res => {
    response.send(formatResponseHtml(res.success, res.jsonData, res.error));
  })
})

app.listen(port, () => {})