const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class RoleRepository {

    constructor(query) {
        this.query = query
    }
    
    /*
      Função que insere uma nova Role

      Recebe:
          actionWindow - String - Actions da window, separada por virgula
          nameWindow -String - Nome da tela
      Retorna:
          {success: true ou false, erro:[]}

      Utiliza as funções:
          insertNewAdvocacy: AdvocacyService
    */

   insertNewRole(nameRole,descriptionRole){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO role (namerole,descriptionrole) VALUES ($1,$2)', [nameRole,descriptionRole], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

};

module.exports = RoleRepository;