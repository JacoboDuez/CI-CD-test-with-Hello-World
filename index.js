const express = require("express");
const app = express();

port = "3000";

function callGet(){
        app.get("/",function(req,res){
            res.send('Hello World from Express');
        });
        return 'Hello World from Express';
}

console.log(callGet());



app.listen(port,()=>{
    console.log('Connecting to port ' +  port);

});


module.exports =  callGet;