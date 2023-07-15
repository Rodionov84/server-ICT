const Pool = require("pg").Pool;

const connectPool = new Pool({
    user: "postgres",   
    password: "7JR5fJ4XaXdseKJ",
    host: "localhost",
    port: 5432,
    database: "pernins",
})

module.exports = connectPool;