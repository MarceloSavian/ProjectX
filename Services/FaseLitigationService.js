const FaseLitigationRepository = require('../Repositories/FaseLitigationRepository');

class FaseLitigationService {

    constructor(query) {
        this.query = query
    }

    async insertFaseLitigation(nameFaseLitigation, descriptionFaseLitigation){
        const FaseLitigation = new FaseLitigationRepository(this.query);

        let response =  await FaseLitigation.insertFaseLitigation(nameFaseLitigation, descriptionFaseLitigation);
 
        return response
    }
    async deleteFaseLitigation (idFaseLitigation){
        const FaseLitigation = new FaseLitigationRepository(this.query);

        let response = await FaseLitigation.deleteFaseLitigation(idFaseLitigation);

        return response
    }
    async selectFaseLitigation (){
        const FaseLitigation = new FaseLitigationRepository(this.query);

        let response = await FaseLitigation.selectFaseLitigation();

        return response
    }

    async updateFaseLitigation(idFaseLitigation, nameFaseLitigation, descriptionFaseLitigation){
        const FaseLitigation = new FaseLitigationRepository(this.query);

        let response =  await FaseLitigation.updateFaseLitigation(idFaseLitigation, nameFaseLitigation, descriptionFaseLitigation);

        return response
    }
};

module.exports = FaseLitigationService;