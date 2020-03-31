
ERRORS = Object.freeze({
    GENERIC: -1,
    INVALID_VARIABLE: -2,
    CONNECTION_ERROR: -3
});

errors = [
    { code: ERRORS.GENERIC, description: "Erro gen�rico" },
    { code: ERRORS.CONNECTION_ERROR, description: "Erro de conexão"},
    { code: ERRORS.UPDATE_CASHIER_ERROR, description: "Caixa não pode ser editado se estiver aberto"}
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

