const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();
const CashierRepository = require('../Repositories/CashierRepository');
const CashFlowRepository = require('../Repositories/CashFlowRepository')
const MovementRepository = require('../Repositories/MovementsRepository')
const pg = require('pg');

class CashFlowService{

    constructor(query) {
        this.query = query
    }
    
    async openCashier(idCashier, openedAt, openedBy, initialCash, statusCashFlow){
        const cashierRepository = new CashierRepository(this.query)
        const cashFlowRepository = new CashFlowRepository(this.query)

        let checkStatusCashier = await cashierRepository.checkStatusCashier(idCashier);

        if(!checkStatusCashier.success || checkStatusCashier.jsonData[0].statuscashier === true)
            return {success:false, error:ErrorService.formatReponseError(ERRORS.UPDATE_CASHIER_ERROR,""), jsonData:[]}
        
        cashierRepository.updateCashierStatus(idCashier,true)
        return cashFlowRepository.insertCashFlow(idCashier, openedAt, openedBy, initialCash, statusCashFlow)        
    }

    async closeCashier(idCashier, closedBy){
        const cashierRepository = new CashierRepository(this.query)
        const cashFlowRepository = new CashFlowRepository(this.query)

        let checkStatusCashier = await cashierRepository.checkStatusCashier(idCashier);

        if(!checkStatusCashier.success || checkStatusCashier.jsonData[0].statuscashier === false)
            return {success:false, error:ErrorService.formatReponseError(ERRORS.CASHIER_ALREADY_CLOSED,""), jsonData:[]}
        
        let cashier = checkStatusCashier.jsonData[0]
        
        let sum = await this.getSumEntrysExitsCashier(cashier)
        let closedAt = await this.getEventDate(new Date().getTime(),0)
        let finalCash = cashier.currentmoney + sum.sum

        cashFlowRepository.updateCashFlow(sum.idCashFlow, closedAt, closedBy, finalCash, false)
        cashierRepository.updateCashier(cashier.idcashier, cashier.idadvocacypk, cashier.namecashier, finalCash, false)

        return {success:true, error:[], jsonData:[]}   
    }

    async getSumEntrysExitsCashier(cashier){
        const cashFlowRepository = new CashFlowRepository(this.query)
        const movementRepository = new MovementRepository(this.query)
        console.log(cashier)

        let cashFlow = await cashFlowRepository.getCashFlowByCashierIdByStatus(cashier.idcashier,true)
        
        console.log(cashFlow)
        cashFlow = cashFlow.jsonData[0]
        
        let entrys = await movementRepository.getMovementsByCashFlowIdByType(cashFlow.idcashflow,true)
        entrys = entrys.jsonData
        console.log(entrys)

        let exits = await movementRepository.getMovementsByCashFlowIdByType(cashFlow.idcashflow,false)
        exits = exits.jsonData
        console.log(exits)

        let sum = 0
        for(const i in entrys){
            sum += entrys[i].value
        }
        for(const i in exits){
            sum -= exits[i].value
        }
        console.log(sum)
        return {sum, idCashFlow:cashFlow.idcashflow}
    }

    async getEventDate(event_date, event_timezone_offset) {
        let d = new Date(event_date);
        return d.toUTCString()
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} `
                + `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}-07`
    }

}
module.exports = CashFlowService;