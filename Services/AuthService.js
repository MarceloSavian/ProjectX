const UserRepository = require('../Repositories/UserRepository');
const AdvocacyUserRepository = require('../Repositories/AdvocacyUserRepository');
const { ErrorFunctions, ERRORS } = require('./ErrorService');
const ErrorService = new ErrorFunctions();
const AdvocacyService = require('./AdvocacyService');

class AuthService {

    constructor(query) {
        this.query = query
    }

    async userLogin(email, password){
        const userRepository = new UserRepository(this.query)
        const advocacyUserRepository = new AdvocacyUserRepository(this.query)
        const advocacyService = new AdvocacyService(this.query)

        let checkData = await userRepository.selectUserByEmailAndPassword(email, password);//Verifico se já existe usuario com esses dados

        console.log(checkData)

        if(!checkData.success)
            return checkData

        if(checkData.jsonData === undefined || checkData.jsonData.length === 0)//Se existir retorna erro
            return {success:false, error:ErrorService.formatReponseError(ERRORS.USER_NOT_FOUND,""), jsonData:[]}

        let userData = checkData.jsonData[0]

        let idUser = userData.iduser;

        let advocacysRelated = await advocacyUserRepository.getUserAdvocacys(idUser)

        if(!advocacysRelated.success)
            return advocacysRelated

        advocacysRelated = advocacysRelated.jsonData
        
        userData.advocacys = [];

        for(const i in advocacysRelated){
            let advocacyInfo = await advocacyService.selectAdvocacy(advocacysRelated[i].idadvocacyfk)
            userData.advocacys.push(advocacyInfo.jsonData[0])
        }

        return checkData
    }
};

module.exports = AuthService;