import http from 'http';
import express from 'express';
import Sequelize from 'sequelize';

console.log('----------- starting! ------------')

var config = {database : 'SeatbackDb', username : 'seatbackuser', password : 'seatbackpassword'}

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: 'seatbackdb.cluster-cbrc9wdg1jzr.eu-central-1.rds.amazonaws.com',
    port: 5432,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'postgres',
    dialectOptions: {
        ssl:'Amazon RDS'
    },
    pool: { maxConnections: 5, maxIdleTime: 30},
    language: 'en'
})

sequelize.query('SELECT * FROM some_table').success(function(result) {
  console.log(result);
}).error(function(err) {
  console.log(err);
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

