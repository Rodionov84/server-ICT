const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",   
    password: "Chang",
    host: "http://www.react-js.site",
    port: 5432,
    database: "pernins",
})

module.exports = pool;