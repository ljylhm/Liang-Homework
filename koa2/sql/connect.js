const Client  = require("mysql-pro");

let options = {
    //host: '115.159.72.66',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    database: 'liang-sys',
    password: '123456',
}

const client = new Client({
    mysql:options
})

module.exports = client;