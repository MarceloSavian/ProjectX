const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class AdvocacyRepository {

    constructor(query) {
        this.query = query
    }

    /*
      Função que insere uma nova Advocacia, sempre com status 1 de ativo

      Recebe:
          nameAdvocacy - String - Nome da advocacia
          addressAdvocacy - String - Endereço da advocacia (Rua)
          cityAadvocacy - String - Cidade da advocacia
          bairroAdvocacy - String - Bairro da advocacia
          ufAdvocacy - String - Uf da advocacia, 2 caracteres
          phoneAdvocacy - String - Telefone da advocacia
          cnpjAdvocacy - String - Cnpj da advocacia
      Retorna:
          {success: true ou false, erro:[]}

      Utiliza as funções:
    */

    insertNewAdvocacy(nameAdvocacy, addressAdvocacy,cityAadvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy,latitudeAdvocacy,longitudeAdvocacy,statusAdvocacy){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO advocacy (nameadvocacy, addressadvocacy,cityadvocacy,bairroadvocacy,ufadvocacy,phoneadvocacy,cnpjadvocacy,latitudeadvocacy,longitudeadvocacy,statusadvocacy) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10)', [nameAdvocacy, addressAdvocacy,cityAadvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy,latitudeAdvocacy,longitudeAdvocacy,statusAdvocacy], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

};

module.exports = AdvocacyRepository;