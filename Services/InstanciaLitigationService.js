const InstanciaLitigationRepository = require('../Repositories/InstanciaLitigationRepository');

class InstanciaLitigationService {

    constructor(query) {
        this.query = query
    }

    async insertInstanciaLitigation(nameInstanciaLitigation, descriptionInstanciaLitigation){
        const InstanciaLitigation = new InstanciaLitigationRepository(this.query);

        let response =  await InstanciaLitigation.insertInstanciaLitigation(nameInstanciaLitigation, descriptionInstanciaLitigation);
 
        return response
    }
    async deleteInstanciaLitigation (idInstanciaLitigation){
        const InstanciaLitigation = new InstanciaLitigationRepository(this.query);

        let response = await InstanciaLitigation.deleteInstanciaLitigation(idInstanciaLitigation);

        return response
    }
    async selectInstanciaLitigation (){
        const InstanciaLitigation = new InstanciaLitigationRepository(this.query);

        let response = await InstanciaLitigation.selectInstanciaLitigation();

        return response
    }

    async updateInstanciaLitigation(idInstanciaLitigation, nameInstanciaLitigation, descriptionInstanciaLitigation){
        const InstanciaLitigation = new InstanciaLitigationRepository(this.query);

        let response =  await InstanciaLitigation.updateInstanciaLitigation(idInstanciaLitigation, nameInstanciaLitigation, descriptionInstanciaLitigation);

        return response
    }
};

module.exports = InstanciaLitigationService;