const MovementsRepository = require('../Repositories/MovementsRepository');
const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class MovementsService {

    constructor(query) {
        this.query = query
        this.movementsRepository = new MovementsRepository(query)
    }

    async insertMovement(idCashFlow, idMovementTypespk, idUserpk, movementTimestamp, value, type){
        let movementsRepository = this.movementsRepository

        return await movementsRepository.insertMovement(idCashFlow, idMovementTypespk, idUserpk, movementTimestamp, value, type)
    }

};

module.exports = MovementsService;