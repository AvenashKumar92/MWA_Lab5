const express=require('express');
const fetch=require('node-fetch');
const app = express();
const port=3000;

app.enable('trust proxy');
app.enable('case sensitive routing');
app.enable('strict routing');
app.set('x-powered-by', false);



async function userData(response){
    try{
        let result=await fetch('http://jsonplaceholder.typicode.com/users/');
        let usersInfo = await result.text();
        console.log(usersInfo);
        response.status(200).end(usersInfo);
    }
    catch (err){
        console.log(err.message);
        response.status(500).end(err.message);
    }
}

app.get('/users', function(request, response){
    userData(response);
});

app.listen(port, function(){
    console.log('The server is running on port %s', port);
})