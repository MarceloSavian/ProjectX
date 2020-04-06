const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class TypeLitigationRepository {

    constructor(query) {
        this.query = query
    }

    insertTypeLitigation(nameTypeLitigation, descriptionTypeLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO TypeLitigation (nameTypeLitigation, descriptionTypeLitigation) VALUES ($1, $2)', [nameTypeLitigation, descriptionTypeLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    deleteTypeLitigation(idTypeLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('DELETE FROM TypeLitigation WHERE idTypeLitigation = $1', [idTypeLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectTypeLitigation(){
        return new Promise((resolve, reject) => {
            this.query.query('select * from TypeLitigation', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }
    
    updateTypeLitigation(idTypeLitigation, nameTypeLitigation, descriptionTypeLitigation){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE TypeLitigation SET nameTypeLitigation = '${nameTypeLitigation}', descriptionTypeLitigation = '${descriptionTypeLitigation}' WHERE idTypeLitigation = ${idTypeLitigation}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }
}
module.exports = TypeLitigationRepository;