const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')

const path = require('path')

//vai fazer conexão com o banco de dados, o arquivo nao existe logo de cara, vai acontecer 
//não acontece ao mesmo tempo por isso precisa de uma função assincrona
async function sqliteConnection(){
    const database = await sqlite.open({
        //propriedade onde vai ficar salvo
        filename: path.resolve(__dirname, '..', 'database.db'),
        //drive que vai estabelecer conexão
        driver: sqlite3.Database
    })
    return database
}

module.exports = sqliteConnection
