const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const Pool = require('pg').Pool

const { ErrorFunctions, ERRORS } = require('./Services/ErrorService');
const errorService = new ErrorFunctions();

const AdvocacyService = require('./Services/AdvocacyService')
const WindowService = require('./Services/WindowService')
const RoleService = require('./Services/RoleService')

//Config banco
const query = new Pool({
  user: 'sysadm',
  host: 'dobkovski.com',
  database: 'sysadm',
  password: 'R00tk1t!',
  port: 9090,
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
      Função que insere uma nova Advocacia, sempre com status 1 de ativo

      url: link/insertNewAdvocacy
      Method: POST
      Recebe:
          nameAdvocacy - String - Nome da advocacia
          addressAdvocacy - String - Endereço da advocacia (Rua)
          cityAadvocacy - String - Cidade da advocacia
          bairroAdvocacy - String - Bairro da advocacia
          ufAdvocacy - String - Uf da advocacia, 2 caracteres
          phoneAdvocacy - String - Telefone da advocacia
          cnpjAdvocacy - String - Cnpj da advocacia
          latitudeAdvocacy - Float - Latitude advocacia
          longitudeAdvocacy - Float - Longitude advocacia
      Retorna:
          {success: true ou false, erro:[]}

      Utiliza as funções:
          insertNewAdvocacy: AdvocacyService
    */

app.post('/insertNewAdvocacy', (request, response) => {
    const {nameAdvocacy, addressAdvocacy,cityAadvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy, latitudeAdvocacy, longitudeAdvocacy} = checkRequisitionType(request.body);

    const advocacyService = new AdvocacyService(query);

    advocacyService.insertNewAdvocacy(nameAdvocacy, addressAdvocacy,cityAadvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy,latitudeAdvocacy,longitudeAdvocacy).then(res => {
      response.send(formatResponseHtml(res.success, res.jsonData, res.error));
    }).catch(e => {
      console.log("erro", e.message);
      res.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
    });
})

    /*
      Função que insere uma nova Tela, sempre com status 1 de ativo

      Recebe:
          actionWindow - String - Actions da window, separada por virgula
          nameWindow -String - Nome da tela
      Retorna:
          {success: true ou false, erro:[]}

      Utiliza as funções:
          insertNewAdvocacy: AdvocacyService
    */

  app.post('/insertNewWindow', (request, response) => {
    const {actionWindow,nameWindow} = checkRequisitionType(request.body);

    const windowService = new WindowService(query);

    windowService.insertNewWindow(actionWindow,nameWindow).then(res => {
      response.send(formatResponseHtml(res.success, res.jsonData, res.error));
    }).catch(e => {
      console.log("erro", e.message);
      res.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
    });
  })

    /*
      Função que insere uma nova Tela, sempre com status 1 de ativo

      Recebe:
          actionWindow - String - Actions da window, separada por virgula
          nameWindow -String - Nome da tela
      Retorna:
          {success: true ou false, erro:[]}

      Utiliza as funções:
          insertNewAdvocacy: AdvocacyService
    */

   app.post('/insertNewRole', (request, response) => {
    const {nameRole,descriptionRole} = checkRequisitionType(request.body);

    const roleService = new RoleService(query);

    roleService.insertNewRole(nameRole,descriptionRole).then(res => {
      response.send(formatResponseHtml(res.success, res.jsonData, res.error));
    }).catch(e => {
      console.log("erro", e.message);
      res.send(formatResponseHtml(false, '', errorService.formatReponseError(ERRORS.GENERIC, e.message)));
    });
  })

app.listen(port, () => {})