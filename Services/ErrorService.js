
ERRORS = Object.freeze({
    GENERIC: -1,
    INVALID_VARIABLE: -2,
    CONNECTION_ERROR: -3,
    USER_ALREADY_EXIST: -4,
    USER_NOT_FOUND: -5,
    UPDATE_CASHIER_ERROR:-6
});

errors = [
    { code: ERRORS.GENERIC, description: "Erro genérico" },
    { code: ERRORS.CONNECTION_ERROR, description: "Erro de conexão"},
    { code: ERRORS.UPDATE_CASHIER_ERROR, description: "Caixa não pode ser editado se estiver aberto"},
    { code: ERRORS.USER_ALREADY_EXIST, description: "Usuario já encontrado com esses dados"},
    { code: ERRORS.USER_NOT_FOUND, description: "E-mail ou senha inválidos"}
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

