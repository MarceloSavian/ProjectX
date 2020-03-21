const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class WindowRepository {

    constructor(query) {
        this.query = query
    }
    
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

   insertNewWindow(actionWindow,nameWindow){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO windows (actionwindow,namewindow) VALUES ($1,$2)', [actionWindow,nameWindow], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

};

module.exports = WindowRepository;