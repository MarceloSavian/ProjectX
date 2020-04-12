const CustomerRepository = require('../Repositories/CustomerRepository');

class CustomerService {

    constructor(query) {
        this.query = query
    }

    /*
      Função que insere uma nova Advocacia, sempre com status 1 de ativo

      Recebe:
          nameAdvocacy - String - Nome da advocacia
          addressAdvocacy - String - Endereço da advocacia (Rua)
          cityAdvocacy - String - Cidade da advocacia
          bairroAdvocacy - String - Bairro da advocacia
          ufAdvocacy - String - Uf da advocacia, 2 caracteres
          phoneAdvocacy - String - Telefone da advocacia
          cnpjAdvocacy - String - Cnpj da advocacia
      Retorna:
          {success: true ou false, erro:[]}

      Utiliza as funções:
          insertAdvocacy: CustomerRepository
    */

    async insertCustomer(nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer){
        const customerRepository = new CustomerRepository(this.query);

        let response =  await customerRepository.insertCustomer(nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer);

        return response
    }
    async deleteCustomer(idCustomer){
        const customerRepository = new CustomerRepository(this.query);
        
        let response = await customerRepository.deleteCustomer(idCustomer);

        return response
    }
    async selectCustomer (){
        const customerRepository = new CustomerRepository(this.query);

        let response = await customerRepository.selectCustomer();

        return response
    }

    async updateCustomer(idCustomer, nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer){
        const customerRepository = new CustomerRepository(this.query);

        let response =  await customerRepository.updateCustomer(idCustomer, nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer);

        return response
    }
};

module.exports = CustomerService;