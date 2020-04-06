const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class AreaLitigationRepository {

    constructor(query) {
        this.query = query
    }

    insertAreaLitigation(nameAreaLitigation, descriptionAreaLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO areaLitigation (nameAreaLitigation, descriptionAreaLitigation) VALUES ($1, $2)', [nameAreaLitigation, descriptionAreaLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    deleteAreaLitigation(idAreaLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('DELETE FROM areaLitigation WHERE idAreaLitigation = $1', [idAreaLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectAreaLitigation(){
        return new Promise((resolve, reject) => {
            this.query.query('select * from areaLitigation', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }
    updateAreaLitigation(idAreaLitigation, nameAreaLitigation, descriptionAreaLitigation){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE areaLitigation SET nameAreaLitigation = '${nameAreaLitigation}', descriptionAreaLitigation = '${descriptionAreaLitigation}' WHERE idAreaLitigation = ${idAreaLitigation}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }
}
module.exports = AreaLitigationRepository;