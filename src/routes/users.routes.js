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

const usersRoutes = Router()
//POST
usersRoutes.post('/', (request, response) => {
    const { name, email, password } = request.body

    response.json({ name, email, password })
})

module.exports = usersRoutes