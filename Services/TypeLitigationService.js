const TypeLitigationRepository = require('../Repositories/TypeLitigationRepository');

class TypeLitigationService {

    constructor(query) {
        this.query = query
    }

    async insertTypeLitigation(nameTypeLitigation, descriptionTypeLitigation){
        const TypeLitigation = new TypeLitigationRepository(this.query);

        let response =  await TypeLitigation.insertTypeLitigation(nameTypeLitigation, descriptionTypeLitigation);
 
        return response
    }
    async deleteTypeLitigation (idTypeLitigation){
        const TypeLitigation = new TypeLitigationRepository(this.query);

        let response = await TypeLitigation.deleteTypeLitigation(idTypeLitigation);

        return response
    }
    async selectTypeLitigation (){
        const TypeLitigation = new TypeLitigationRepository(this.query);

        let response = await TypeLitigation.selectTypeLitigation();

        return response
    }

    async updateTypeLitigation(idTypeLitigation, nameTypeLitigation, descriptionTypeLitigation){
        const TypeLitigation = new TypeLitigationRepository(this.query);

        let response =  await TypeLitigation.updateTypeLitigation(idTypeLitigation, nameTypeLitigation, descriptionTypeLitigation);

        return response
    }
};

module.exports = TypeLitigationService;