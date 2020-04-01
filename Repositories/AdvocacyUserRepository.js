const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class AdvocacyUserRepository{

    constructor(query) {
        this.query = query
    }

    insertAdvocacyUser(idadvocacyfk,iduserfk){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO "advocacyuser" (idadvocacyfk, iduserfk) VALUES ($1,$2)', [idadvocacyfk,iduserfk], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                //console.log(results);
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    getUserAdvocacys(iduserfk){
        return new Promise((resolve, reject) => {
            this.query.query(`SELECT * FROM "advocacyuser" WHERE iduserfk='${iduserfk}'`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                    return
                }   
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }
}

module.exports = AdvocacyUserRepository;