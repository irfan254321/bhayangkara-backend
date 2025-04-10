const express = require("express")
const cors = require("cors")

global.app = express();

global.knex = require("knex")({
    client : "mysql",
    connection : {
        host : "srv1866.hstgr.io",
        user : "u225792926_root",
        password : "Handsome2543",
        database : "u225792926_rating",
    }
})

app.use(cors())
app.use(express.json())

require("./module/comment")

app.listen(3003)