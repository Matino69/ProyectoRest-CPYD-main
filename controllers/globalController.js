const axios = require('axios');
const {db} = require('./database');
const moment = require('moment');
const jwt = require('jwt-simple');
var fs = require('fs');

const loginClient = async (req,res) => {
    try {
        var data = JSON.stringify({
            "successUrl": `http://localhost:${process.env.PORT || 3000}/GRUPO-F/success`,
            "failedUrl": `http://localhost:${process.env.PORT || 3000}/GRUPO-F/failed`
          });
          
          var config = {
            method: 'post',
            url: 'https://api.sebastian.cl/UtemAuth/v1/tokens/request',
            headers: { 
              'X-API-TOKEN': 'CPYD-F-202201', 
              'X-API-KEY': 'd7b2bbc6393f49fdaf8be09ef652b44d', 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            res.status(200).json(response.data);
          })
          .catch(function (error) {
            res.status(400).json(error);
          });
    } catch (error) {
        res.status(400).json(error);
    }
}