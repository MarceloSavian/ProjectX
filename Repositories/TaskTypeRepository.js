const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class TaskTypeRepository {

    constructor(query) {
        this.query = query
    }

    insertTaskType(nameTaskType, descriptionTaskType){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO TaskType (nameTaskType, descriptionTaskType) VALUES ($1, $2)', [nameTaskType, descriptionTaskType], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    deleteTaskType(idTaskType){
        return new Promise((resolve, reject) => {
            this.query.query('DELETE FROM TaskType WHERE idTaskType = $1', [idTaskType], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectTaskType(){
        return new Promise((resolve, reject) => {
            this.query.query('select * from TaskType', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }
    
    updateTaskType(idTaskType, nameTaskType, descriptionTaskType){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE TaskType SET nameTaskType = '${nameTaskType}', descriptionTaskType = '${descriptionTaskType}' WHERE idTaskType = ${idTaskType}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }
}
module.exports = TaskTypeRepository;