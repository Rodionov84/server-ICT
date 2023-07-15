const Pool = require("pg").Pool;

const connectPool = new Pool({
    user: "postgres",   
    password: "Chang-React23",
    host: "localhost",
    port: 5432,
    database: "pernins",
})

module.exports = connectPool;