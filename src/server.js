const express = require('express');

const app = express();

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

//POST

app.use(express.json())

app.post('/users', (request, response) => {
    const { name, email, password } = request.body

    response.send(`Usuário: ${name}, email: ${email}, senha: ${password}`)
})


const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));


