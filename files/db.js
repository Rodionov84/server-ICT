const Pool = require("pg").Pool;

const connectPool = new Pool({
    user: "postgres",   
    password: "Chang-React23",
    host: "80.78.248.241",
    port: 5432,
    database: "pernins",
})

module.exports = connectPool;