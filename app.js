import http from 'http';
import express from 'express';

const Sequelize = require('sequelize')	
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

sequelize.authenticate().then(() => { 
	console.log('Connection has been established successfully.'); 
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});

const port = 80

let app = express();
app.server = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World 1!'))

app.server.listen(port, err => {
    if(err){
        console.log("-->> Error 1: " + err);
    }
}); 

