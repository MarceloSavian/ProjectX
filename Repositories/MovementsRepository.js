const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class MovementsRepository{

    constructor(query) {
        this.query = query
    }

    insertMovement(idCashFlow, idMovementTypespk, idUserpk, movementTimestamp, value, type){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO movement (idcashflowpk, idmovementtypespk, iduserpk, movementtimestamp, value, typemovement) VALUES ($1,$2,$3,$4,$5,$6)', [idCashFlow, idMovementTypespk, idUserpk, movementTimestamp, value, type], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    getMovementsByCashFlowIdByType(idCashFlow, type){
        console.log(type, idCashFlow)
        return new Promise((resolve, reject) => {
            this.query.query(`SELECT * FROM movement WHERE idcashflowpk=${idCashFlow} AND typemovement=${type}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }
}
module.exports = MovementsRepository;