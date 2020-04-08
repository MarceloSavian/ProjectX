const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class CashFlowRepository{

    constructor(query) {
        this.query = query
    }

    insertCashFlow(idCashier, openedAt, openedBy, initialCash, statusCashFlow){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO cashflow (idcashierpk, openedat, openedbypk, initialcash, statuscashflow) VALUES ($1,$2,$3,$4,$5)', [idCashier, openedAt, openedBy, initialCash, statusCashFlow], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    getCashFlowByCashierIdByStatus(idCashier, status){
        return new Promise((resolve, reject) => {
            this.query.query(`SELECT * FROM cashflow WHERE idcashierpk=${idCashier} AND statuscashflow=${status}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }

    updateCashFlow(idCashFlow, closedat, closedbypk, finalcash,status){
        console.log(idCashFlow, closedat, closedbypk, finalcash)
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE cashflow SET finalcash = ${finalcash}, closedat = '${closedat}', closedbypk=${closedbypk}, statuscashflow=${status} WHERE idcashflow = ${idCashFlow}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }
}
module.exports = CashFlowRepository;