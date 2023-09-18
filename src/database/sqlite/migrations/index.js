const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers')

async function migrationsRun(){
    //schema quero referir as tabelas
    const schemas = [
        createUsers
    ].join('')

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error))
}

module.exports = migrationsRun