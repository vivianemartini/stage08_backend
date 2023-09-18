const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

//a classe permite criar varias funções e acessar elas
class UsersController {
  /*     Um controller pode ter no máximo 5 métodos:

    * método index - GET para listar vários registros
    * método show - GET para exibir um registro especifico
    * método create - POST para criar um registro
    * método update - PUT para atualizar um registro
    * método delete - DELETE para remover um registro
 */

  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()

    const checkUserExist = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if(checkUserExist) {
      throw new AppError('Este e-mail já está em uso')
    }

    return response.status(201).json()
  }
}

module.exports = UsersController
