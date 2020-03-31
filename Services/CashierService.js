const CashierRepository = require('../Repositories/CashierRepository');

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

    async updateCashier(){
        const cashierRepository = new CashierRepository(this.query);

        let response = await cashierRepository.updateCashier(idAdvocacypk, nameCashier, currentMoney,statusCashier)
    }
}

module.exports = CashierService;