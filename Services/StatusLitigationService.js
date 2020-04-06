const StatusLitigationRepository = require('../Repositories/StatusLitigationRepository');

class StatusLitigationService {

    constructor(query) {
        this.query = query
    }

    async insertStatusLitigation(nameStatusLitigation, descriptionStatusLitigation){
        const StatusLitigation = new StatusLitigationRepository(this.query);

        let response =  await StatusLitigation.insertStatusLitigation(nameStatusLitigation, descriptionStatusLitigation);
 
        return response
    }
    async deleteStatusLitigation (idStatusLitigation){
        const StatusLitigation = new StatusLitigationRepository(this.query);

        let response = await StatusLitigation.deleteStatusLitigation(idStatusLitigation);

        return response
    }
    async selectStatusLitigation (){
        const StatusLitigation = new StatusLitigationRepository(this.query);

        let response = await StatusLitigation.selectStatusLitigation();

        return response
    }

    async updateStatusLitigation(idStatusLitigation, nameStatusLitigation, descriptionStatusLitigation){
        const StatusLitigation = new StatusLitigationRepository(this.query);

        let response =  await StatusLitigation.updateStatusLitigation(idStatusLitigation, nameStatusLitigation, descriptionStatusLitigation);

        return response
    }
};

module.exports = StatusLitigationService;