const MovementTypeRepository = require('../Repositories/MovementTypeRepository');
const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class MovementTypeService {

    constructor(query) {
        this.query = query
        this.movementTypeRepository = new MovementTypeRepository(query)
    }

    async insertMovementType(nameMovementType, typeMovementType, statusMovementType, idAdvocacyfk){
        let movementTypeRepository = this.movementTypeRepository

        return await movementTypeRepository.insertMovementType(nameMovementType, typeMovementType, statusMovementType, idAdvocacyfk)
    }

    async updateMovementType(idMovementType, nameMovementType, typeMovementType, statusMovementType){
        let movementTypeRepository = this.movementTypeRepository

        return await movementTypeRepository.updateMovementType(idMovementType, nameMovementType, typeMovementType, statusMovementType)
    }

    async getMovementTypes(advocacyId){
        let movementTypeRepository = this.movementTypeRepository

        return await movementTypeRepository.getMovementTypes(advocacyId)
    }

};

module.exports = MovementTypeService;