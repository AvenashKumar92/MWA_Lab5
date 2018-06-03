const express=require('express');
const fetch=require('node-fetch');
const app = express();
const port=3000;

app.enable('trust proxy');
app.enable('case sensitive routing');
app.enable('strict routing');
app.set('x-powered-by', false);



app.get('/users', function(request, response){
    
    const userInfoPromise=fetch('http://jsonplaceholder.typicode.com/users/');
    userInfoPromise.then(data=>data.text())
                    .then(data=>{console.log(data);
                        response.status(200).end(data);})
                    .catch((err)=>{console.error(err.message);
                                    response.status(500).end(err.message);})
});

app.listen(port, function(){
    console.log('The server is running on port %s', port);
})