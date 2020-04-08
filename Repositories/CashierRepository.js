const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class CashierRepository{

    constructor(query) {
        this.query = query
    }

    insertCashier(idAdvocacypk, nameCashier, currentMoney,statusCashier){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO cashier (idadvocacypk, namecashier, currentmoney,statuscashier) VALUES ($1,$2,$3,$4)', [idAdvocacypk, nameCashier, currentMoney,statusCashier], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    deleteCashier(idCashier){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE cashier SET isactive = FALSE where idcashier = ${idCashier}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectAllCashiers(){
        return new Promise((resolve, reject) => {
            this.query.query('SELECT * FROM cashier WHERE isactive = true', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }   
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }

    updateCashier(idCashier, idAdvocacypk, nameCashier, currentMoney,statusCashier){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE cashier SET idadvocacypk = ${idAdvocacypk}, nameCashier = '${nameCashier}',currentMoney = ${currentMoney},statusCashier = '${statusCashier}' where idCashier = ${idCashier}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    selectCashier(){
        return new Promise((resolve, reject) => {
            this.query.query('SELECT * FROM cashier', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }   
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }

    checkStatusCashier(idCashier){
        return new Promise((resolve, reject) => {
            this.query.query(`SELECT * FROM cashier where idCashier = ${idCashier}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }   
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });  
    }

    updateCashierStatus(idCashier,statusCashier){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE cashier SET statusCashier = '${statusCashier}' where idCashier = ${idCashier}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }
}
module.exports = CashierRepository;