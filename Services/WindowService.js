const WindowRepository = require('../Repositories/WindowRepository');

class WindowService {

    constructor(query) {
        this.query = query
    }

    /*
      Função que insere uma nova Tela, sempre com status 1 de ativo

      Recebe:
          actionWindow - String - Actions da window, separada por virgula
          nameWindow -String - Nome da tela
      Retorna:
          {success: true ou false, erro:[]}

      Utiliza as funções:
          insertNewAdvocacy: AdvocacyService
    */

    async insertNewWindow(actionWindow,nameWindow){
        const windowRepository = new WindowRepository(this.query);

        let response =  await windowRepository.insertNewWindow(actionWindow,nameWindow);

        return response
    }

};

module.exports = WindowService;