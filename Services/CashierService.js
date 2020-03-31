const CashierRepository = require('../Repositories/CashierRepository');
const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class CashierService {

    constructor(query) {
        this.query = query
    }
    async insertCashier(idAdvocacypk, nameCashier, currentMoney,statusCashier){
        const cashierRepository = new CashierRepository(this.query);

        let initialStatus = 1;

        let response =  await cashierRepository.insertCashier(idAdvocacypk, nameCashier, currentMoney,statusCashier);

        return response
    }
    async deleteCashier(idCashier){
        const cashierRepository = new CashierRepository(this.query);
        
        let initialStatus = 1;

        let response =  await cashierRepository.deleteCashier(idCashier);

        return response
    }

    async selectAllCashiers(){
        const cashierRepository = new CashierRepository(this.query);

        let response = await cashierRepository.selectAllCashiers();

        return response
    }

    async updateCashier(idCashier, idAdvocacypk, nameCashier, currentMoney,statusCashier){
        const cashierRepository = new CashierRepository(this.query);

        let checkStatusCashier = await cashierRepository.checkStatusCashier(idCashier);

        console.log(checkStatusCashier);

        if(checkStatusCashier.jsonData[0].statuscashier === true){
            return {success:false, error:ErrorService.formatReponseError(ERRORS.UPDATE_CASHIER_ERROR,""), jsonData:[]}
        }

        let response = await cashierRepository.updateCashier(idCashier, idAdvocacypk, nameCashier, currentMoney,statusCashier)
    
        return response
    }
}

module.exports = CashierService;