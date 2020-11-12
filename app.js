const express = require('express');
const app = express();

//Morgan for logging
const morgan = require('morgan');

//Body parsing
const bodyParser = require('body-parser');

// Mongoose for handling our data in MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://theos:' + process.env.MONGO_ATLAS_PW + '@cluster0.fhoct.mongodb.net/<dbname>?retryWrites=true&w=majority', 
{useMongoClient: true}
);

// Handling Cross-Origin Resource Sharing (Browser security)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Allow-Header", 
    "Origin, Content-type, X-Requested-With, Accept, Authorization,");

    if  (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE, PUT');
        return res.status(200).json({});
    }
    next();
});

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const vendingRoutes = require('./vending');

//Output logs on terminal with format dev
app.use(morgan('dev'));

//Extracts urlencoded data and json data for us
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes forward requests to products and orders
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404; // If requested route is not found, we get 404 error
    next(error); //forwards error request
})


// Error handling for all other errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
        
    });
});


module.exports = app;