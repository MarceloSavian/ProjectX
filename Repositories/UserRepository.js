const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class UserRepository{

    constructor(query) {
        this.query = query
    }

    insertUser(nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO "user" (nameuser, cpfuser, rguser, emailuser, phoneuser, adressuser, ufuser, bairrouser, cityuser, passworduser, oabuser, lastadvocacyuserfk) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING iduser', [nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                //console.log(results);
                resolve({success:true, error:[], jsonData:{idUser:results.rows[0].iduser}})
            })
        });
    }

    updateUser(nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId, idUser){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE "user" SET nameuser = '${nameUser}', cpfuser = '${cpfUser}',rguser = '${rgUser}',emailuser = '${emailUser}',phoneuser = '${phoneUser}',adressuser = '${addressUser}',ufuser = '${ufUser}',bairrouser = '${bairroUser}', cityuser = '${cityUser}', passworduser = '${passwordUser}',oabuser = '${oabUser}',lastadvocacyuserfk = '${advocacyId}' WHERE iduser = ${idUser}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

    deleteUser(idUser){
        return new Promise((resolve, reject) => {
            this.query.query(`DELETE FROM "user" WHERE iduser = ${idUser}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectAllUsers(){
        return new Promise((resolve, reject) => {
            this.query.query('SELECT * FROM "user"', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }   
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }

    selectUserByDocumentOrEmail(emailUser,cpfUser,rgUser){
        return new Promise((resolve, reject) => {
            this.query.query(`SELECT * FROM "user" WHERE cpfuser='${cpfUser}' OR emailuser='${emailUser}' OR rguser='${rgUser}'`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }   
                resolve({success:true, error:[], jsonData:results.rows})
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


}

module.exports = UserRepository;