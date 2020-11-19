import http from 'http';
import express from 'express';
import Sequelize from 'sequelize';

console.log('----------- starting! ------------')

var config = {database : 'seatbacksqlserver', username : 'admin', password : 'adminpassword'}


var sequelize = new Sequelize('DeviceRecords', 'admin', 'adminpassword', {
    host: 'seatbacksqlserver.cbrc9wdg1jzr.eu-central-1.rds.amazonaws.com',
    port: 1433,
    logging: console.log,
    maxConcurrentQueries: 100,
	dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
    pool: { maxConnections: 5, maxIdleTime: 30},
})

sequelize.authenticate().then(() => { 
	console.log('Connection has been established successfully.'); 
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});

// sequelize.query('SELECT * FROM some_table').success(function(result) {
//   console.log(result);
// }).error(function(err) {
//   console.log(err);
// });

const port = 80

let app = express();
app.server = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World 1!'))

app.server.listen(port, err => {
    if(err){
        console.log("-->> Error 1: " + err);
    }
}); 



//json
// URL : http://ec2-3-125-6-26.eu-central-1.compute.amazonaws.com/PostNewValues 
// Method : POST
// seatbackId : {seat id}
// email : {user email}
// timestamp : {sent time}
// values : {[seatback points, posture score, dynamic score, breaks score]}
// historic values : [monthly [0], monthly [1], monthly [2] .. monthly [31]]
// country : {country}
//ec2-3-125-6-26.eu-central-1.compute.amazonaws.com
  
