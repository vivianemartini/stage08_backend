//a classe permite criar varias funções e acessar elas
class UsersController {
  /*     Um controller pode ter no máximo 5 métodos:

    * método index - GET para listar vários registros
    * método show - GET para exibir um registro especifico
    * método create - POST para criar um registro
    * método update - PUT para atualizar um registro
    * método delete - DELETE para remover um registro
 */

  create(request, response) {
    const { name, email, password } = request.body

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController
