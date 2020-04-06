const AreaLitigationRepository = require('../Repositories/AreaLitigationRepository');

class AreaLitigationService {

    constructor(query) {
        this.query = query
    }

    async insertAreaLitigation(nameAreaLitigation, descriptionAreaLitigation){
        const areaLitigation = new AreaLitigationRepository(this.query);

        let response =  await areaLitigation.insertAreaLitigation(nameAreaLitigation, descriptionAreaLitigation);
 
        return response
    }
    async deleteAreaLitigation (idAreaLitigation){
        const areaLitigation = new AreaLitigationRepository(this.query);

        let response = await areaLitigation.deleteAreaLitigation(idAreaLitigation);

        return response
    }
    async selectAreaLitigation (){
        const areaLitigation = new AreaLitigationRepository(this.query);

        let response = await areaLitigation.selectAreaLitigation();

        return response
    }

    async updateAreaLitigation(idAreaLitigation, nameAreaLitigation, descriptionAreaLitigation){
        const areaLitigation = new AreaLitigationRepository(this.query);

        let response =  await areaLitigation.updateAreaLitigation(idAreaLitigation, nameAreaLitigation, descriptionAreaLitigation);

        return response
    }
};

module.exports = AreaLitigationService;