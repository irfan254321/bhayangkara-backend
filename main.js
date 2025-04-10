const express = require("express")
const cors = require("cors")

global.app = express();

global.knex = require("knex")({
    client : "mysql",
    connection : {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
    }
})

app.use(cors())
app.use(express.json())

require("./module/comment")

app.listen(3003)