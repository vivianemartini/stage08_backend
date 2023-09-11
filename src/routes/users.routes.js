//importação do router
const { Router } = require('express')

//GET
/* app.get('/message/:id/:user', (request, response) => {
    const { id, user } = request.params

    response.send(`Mensagem id: ${id}. Para o usuário: ${user}`)
})

app.get('/users', (request, response) => {
    const { page, limit } = request.query

    response.send(`Página: ${page}. Mostrar: ${limit}`)
})
 */

const UsersController = require('../controllers/UserController.js')

const usersRoutes = Router()

const usersController = new UsersController()

//POST
usersRoutes.post('/', usersController.create)

module.exports = usersRoutes