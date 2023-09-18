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

//middleware
//acessa o request response e o next para chamar o destino
function myMiddleware (request, response, next){

    next()
}

const usersController = new UsersController()

//POST
usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes