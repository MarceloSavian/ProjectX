const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class CustomerRepository{

    constructor(query) {
        this.query = query
    }

    insertCustomer(nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer){
        return new Promise((resolve, reject) => {
            this.query.query('INSERT INTO customer (nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer], (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    deleteCustomer(idCustomer){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE customer SET isactive = FALSE where idCustomer = ${idCustomer}`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                resolve({success:true, error:[], jsonData:[]})
            })
        });
    }

    selectCustomer(){
        return new Promise((resolve, reject) => {
            this.query.query('SELECT * FROM customer WHERE isactive = true', (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }   
                resolve({success:true, error:[], jsonData:results.rows})
            })
        });
    }

    updateCustomer(idCustomer, nameCustomer, cpfCustomer, rgCustomer, emailCustomer, phoneCustomer, addressCustomer, bairroCustomer, cityCustomer, ufCustomer, passwordCustomer){
        return new Promise((resolve, reject) => {
            this.query.query(`UPDATE customer SET nameCustomer = '${nameCustomer}',cpfCustomer = '${cpfCustomer}',rgCustomer = '${rgCustomer}', emailCustomer = '${emailCustomer}', phoneCustomer = '${phoneCustomer}',addressCustomer = '${addressCustomer}',bairroCustomer = '${bairroCustomer}', cityCustomer = '${cityCustomer}',ufCustomer = '${ufCustomer}',passwordCustomer = '${passwordCustomer}' where idCustomer = '${idCustomer}'`, (error, results) => {
                if (error) {
                    console.log(error);
                    resolve({success:false, error:ErrorService.formatReponseError(ERRORS.CONNECTION_ERROR,""), jsonData:[]})
                }
                    resolve({success:true, error:[], jsonData:[]})
              })
        });
    }

}
module.exports = CustomerRepository;