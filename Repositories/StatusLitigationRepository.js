const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class StatusLitigationRepository {

    constructor(query) {
        this.query = query
    }

    insertStatusLitigation(nameStatusLitigation, descriptionStatusLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO StatusLitigation (nameStatusLitigation, descriptionStatusLitigation) VALUES ($1, $2)', [nameStatusLitigation, descriptionStatusLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    deleteStatusLitigation(idStatusLitigation){
        return new Promise((resolve, reject) => {
            this.query.query('DELETE FROM StatusLitigation WHERE idStatusLitigation = $1', [idStatusLitigation], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectStatusLitigation(){
        return new Promise((resolve, reject) => {
            this.query.query('select * from StatusLitigation', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }
    
    updateStatusLitigation(idStatusLitigation, nameStatusLitigation, descriptionStatusLitigation){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE StatusLitigation SET nameStatusLitigation = '${nameStatusLitigation}', descriptionStatusLitigation = '${descriptionStatusLitigation}' WHERE idStatusLitigation = ${idStatusLitigation}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }
}
module.exports = StatusLitigationRepository;