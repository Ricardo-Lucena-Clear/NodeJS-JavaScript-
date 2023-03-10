let express = require('express');
let routes = express.Router();


routes.get('/', (req, res)=>{
    res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json({
            users:[{
                name:'Ricardo',
                email:'ricardo@gmail.com',
                id:1
            }]
        })
    });
    routes.get('/admin', (req, res)=>{
        res.statusCode = 200;
            res.setHeader('Content-Type', 'application/js');
            res.json({
                users:[]
            });
        });

     module.exports = routes;