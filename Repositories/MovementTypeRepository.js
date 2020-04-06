const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class MovementTypeRepository{

    constructor(query) {
        this.query = query
    }

    insertMovementType(nameMovementType, typeMovementType, statusMovementType, idAdvocacyfk){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO movementtypes (namemovementtype, typemovementtype, statusmovementtype, idadvocacyfk) VALUES ($1,$2,$3,$4)', [nameMovementType, typeMovementType, statusMovementType, idAdvocacyfk], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    updateMovementType(idMovementType, nameMovementType, typeMovementType, statusMovementType){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE movementtypes SET namemovementtype = '${nameMovementType}',typemovementtype = ${typeMovementType},statusmovementtype = '${statusMovementType}' WHERE idmovementtypes = ${idMovementType}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    getMovementTypes(advocacyId){
        return new Promise((resolve, reject) => {
            this.query.query(`SELECT * FROM movementtypes WHERE idadvocacyfk=${advocacyId}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:results.rows})
              })
        });
    }

}
module.exports = MovementTypeRepository;