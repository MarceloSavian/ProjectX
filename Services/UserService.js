const UserRepository = require('../Repositories/UserRepository');
const AdvocacyUserRepository = require('../Repositories/AdvocacyUserRepository');
const { ErrorFunctions, ERRORS } = require('../Services/ErrorService');
const ErrorService = new ErrorFunctions();

class AdvocacyService {

    constructor(query) {
        this.query = query
    }

    async insertUser(nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId){
        const userRepository = new UserRepository(this.query);
        const advocacyUserRepository = new AdvocacyUserRepository(this.query)

        let checkData = await userRepository.selectUserByDocumentOrEmail(emailUser,cpfUser,rgUser);//Verifico se já existe usuario com esses dados

        if(!checkData.success)
            return checkData

        if(checkData.jsonData !== undefined && checkData.jsonData.length !== 0)//Se existir retorna erro
            return {success:false, error:ErrorService.formatReponseError(ERRORS.USER_ALREADY_EXIST,""), jsonData:[]}
        
        //Cria usuario
        let response =  await userRepository.insertUser(nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId);

        if(!response.success)
            return response

        let idUser = response.jsonData.idUser

        response = await advocacyUserRepository.insertAdvocacyUser(advocacyId,idUser)

        if(!response.success)
            await userRepository.deleteUser(idUser)

        return response
    }

    async updateUser(nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId, idUser){
        const userRepository = new UserRepository(this.query);

        let response =  await userRepository.updateUser(nameUser, cpfUser, rgUser, emailUser, phoneUser, addressUser, ufUser, bairroUser, cityUser, passwordUser, oabUser, advocacyId, idUser);

        return response
    }

    async selectAllUsers(){
        const userRepository = new UserRepository(this.query);

        let response =  await userRepository.selectAllUsers();

        return response
    }

    async deleteUser(idUser){
        const userRepository = new UserRepository(this.query);

        let response =  await userRepository.deleteUser(idUser);

        return response
    }
};

module.exports = AdvocacyService;