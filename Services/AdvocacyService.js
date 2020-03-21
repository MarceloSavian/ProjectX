const AdvocacyRepository = require('../Repositories/AdvocacyRepository');

class AdvocacyService {

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
          insertNewAdvocacy: advocacyRepository
    */

    async insertNewAdvocacy(nameAdvocacy, addressAdvocacy,cityAadvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy,latitudeAdvocacy,longitudeAdvocacy){
        const advocacyRepository = new AdvocacyRepository(this.query);
        
        let initialStatus = 1;

        let response =  await advocacyRepository.insertNewAdvocacy(nameAdvocacy, addressAdvocacy,cityAadvocacy,bairroAdvocacy,ufAdvocacy,phoneAdvocacy,cnpjAdvocacy,latitudeAdvocacy,longitudeAdvocacy,initialStatus);

        return response
    }

};

module.exports = AdvocacyService;