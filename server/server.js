const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { readdirSync } = require('fs')
const cors = require('cors')
// const product = require('./routers/product')
// const auth = require('./routers/auth')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

// app.use('/api',product)
// app.use('/api',auth)

readdirSync('./routers')
.map((item)=>app.use('/api',require('./routers/'+item))) //ในโฟลเดอร์จะมีหลายไฟล์เป็นArray .map item คือดึงไฟล์ทั้งหมด

app.listen(5000,()=>console.log('server running on port 5000'))