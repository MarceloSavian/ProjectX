const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class InstanciaLitigationRepository {

    constructor(query) {
        this.query = query
    }

    insertInstanciaLitigation(nameInstanciaLitigation, descriptionInstanciaLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO InstanciaLitigation (nameInstanciaLitigation, descriptionInstanciaLitigation) VALUES ($1, $2)', [nameInstanciaLitigation, descriptionInstanciaLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    deleteInstanciaLitigation(idInstanciaLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('DELETE FROM InstanciaLitigation WHERE idInstanciaLitigation = $1', [idInstanciaLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectInstanciaLitigation(){
        return new Promise((resolve, reject) => {
            this.query.query('select * from InstanciaLitigation', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }
    
    updateInstanciaLitigation(idInstanciaLitigation, nameInstanciaLitigation, descriptionInstanciaLitigation){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE InstanciaLitigation SET nameInstanciaLitigation = '${nameInstanciaLitigation}', descriptionInstanciaLitigation = '${descriptionInstanciaLitigation}' WHERE idInstanciaLitigation = ${idInstanciaLitigation}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }
}
module.exports = InstanciaLitigationRepository;