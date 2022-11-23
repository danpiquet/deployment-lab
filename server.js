const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/public`))

app.listen(5000,
   () => console.log(`server running on 5000, you dumbass`)
)