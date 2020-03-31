
ERRORS = Object.freeze({
    GENERIC: -1,
    INVALID_VARIABLE: -2,
    CONNECTION_ERROR: -3,
    USER_ALREADY_EXIST: -4
});

errors = [
    { code: ERRORS.GENERIC, description: "Erro gen�rico" },
    { code: ERRORS.CONNECTION_ERROR, description: "Erro de conexão"},
    { code: ERRORS.USER_ALREADY_EXIST, description: "Usuario já encontrado com esses dados"}
];

class ErrorFunctions {
  
    getErrorFromKey(errorKey) {
        return errors.find(x => x.code === errorKey).description
    }

    formatReponseError(errorKey, complement) {
        return ({ code: errorKey, description: this.getErrorFromKey(errorKey), complement: complement });
    }
    
};

module.exports = { ErrorFunctions, ERRORS }

