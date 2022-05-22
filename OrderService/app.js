const express = require('express')
const app = express()
require('dotenv').config()
const CORS = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const mogoose = require('mongoose')

/**DB connection */
mogoose.connect(
    "mongodb+srv://admin:nmumbolSULsA5GiN@cluster0.5j22e.mongodb.net/fastlk_order?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
    if(err) {
        console.log('Error with connecting DB', err)
    }else {
        console.log('DB Connected')
    }
})

const PORT = process.env.PORT || 5003

/**importing routes */
const order_api = require('./src/routes/order')

/**app middlewares */
app.use(CORS())
app.use(morgan('dev'))
app.use(bodyParser())
app.use(cookieParser())


/**routing mddlewares */
app.use('/api/orders', order_api)



app.listen(PORT, () => {
    console.log(`Listning on port: ${PORT}`)
})

