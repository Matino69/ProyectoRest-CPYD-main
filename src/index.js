const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const jwt = require('jwt-simple');
const { DatabaseError } = require('pg');
const { db } = require();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swaggerInfo.json');
const logger = require('../utils/logger');


const sql = fs.readFileSync('./database/database.sql').toString();

async function InitDataBase() {
    const existTables = await database.query(sql, function name(error, result) {
        if(error){
            console.log('Error', error);
        }else{
            console.log("Database creada");
        }
        
    })
}

InitDataBase();
app.use(cors());
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 3000;

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Autorization, A-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE','OPTIONS', 'HEAD');
    next();
})


module.exports = app;