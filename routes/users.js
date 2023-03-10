     module.exports =app =>{
        app.get('/users', (req, res)=>{
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
            app.post('/users', (req, res)=>{
                
                    res.json(req.body);
                    
                });
        

     }