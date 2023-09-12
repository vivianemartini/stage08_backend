class AppError {
    message;
    statusCode;

    //método constructor - ele é carregado automaticamente quando a classe for instansiada - utilzar ela
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError