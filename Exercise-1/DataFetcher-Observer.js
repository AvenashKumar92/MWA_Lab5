const express=require('express');
const fetch=require('node-fetch');
const {from}=require('rxjs');
const app = express();
const port=3000;

app.enable('trust proxy');
app.enable('case sensitive routing');
app.enable('strict routing');
app.set('x-powered-by', false);



app.get('/users', function(request, response){
    
    from(fetch('http://jsonplaceholder.typicode.com/users/').then((e)=>e.text())).
    subscribe((e)=>{
        console.log(e);
        response.status(200).end(e);
    },
    (err)=>{
        console.error(err.message);
        response.status(500).end(err.message);
    },
    ()=>{
        console.log('Complete request');
    });
});

app.listen(port, function(){
    console.log('The server is running on port %s', port);
})