import http from 'http';
import express from 'express';
	
const port = 80

let app = express();
app.server = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World 1!'))

app.server.listen(port, err => {
    if(err){
        console.log("-->> Error 1: " + err);
    }
}); 

