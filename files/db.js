const Pool = require("pg").Pool;

const connectPool = new Pool({
    user: "postgres",   
    password: "YuWX7%e-pUhP",
    host: "localhost",
    port: 5432,
    database: "pernins",
})

module.exports = connectPool;