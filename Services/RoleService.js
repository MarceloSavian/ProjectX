const RoleRepository = require('../Repositories/RoleRepository');

class RoleService {

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

    async insertNewRole(nameRole,descriptionRole){
        const roleRepository = new RoleRepository(this.query);

        let response =  await roleRepository.insertNewRole(nameRole,descriptionRole);

        return response
    }

};

module.exports = RoleService;