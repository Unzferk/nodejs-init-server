
const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app= express();
        this.port= process.env.PORT;

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

    }
    
    middlewares(){
        //cors
        this.app.use(cors());

        //JSON body - reading and parsing
        this.app.use(express.json());

        //public folder 
        this.app.use(express.static('public'));
    }
    
    routes(){

        this.app.use('/api/users',require('../routes/user.routes'));
        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("running in port", this.port);
        });
    }
}

module.exports = Server;
