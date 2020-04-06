const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class FaseLitigationRepository {

    constructor(query) {
        this.query = query
    }

    insertFaseLitigation(nameFaseLitigation, descriptionFaseLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO FaseLitigation (nameFaseLitigation, descriptionFaseLitigation) VALUES ($1, $2)', [nameFaseLitigation, descriptionFaseLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    deleteFaseLitigation(idFaseLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('DELETE FROM FaseLitigation WHERE idFaseLitigation = $1', [idFaseLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectFaseLitigation(){
        return new Promise((resolve, reject) => {
            this.query.query('select * from FaseLitigation', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }
    
    updateFaseLitigation(idFaseLitigation, nameFaseLitigation, descriptionFaseLitigation){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE FaseLitigation SET nameFaseLitigation = '${nameFaseLitigation}', descriptionFaseLitigation = '${descriptionFaseLitigation}' WHERE idFaseLitigation = ${idFaseLitigation}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }
}
module.exports = FaseLitigationRepository;