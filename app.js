import http from 'http';
import express from 'express';
import sql from 'mssql';

console.log('----------- starting! ------------')

 // config for your database
var config = {
    user: 'admin',
    password: 'adminpassword',
    server: 'seatbacksqlserver.cbrc9wdg1jzr.eu-central-1.rds.amazonaws.com',
    database: 'DeviceRecords' 
};


const port = 80

let app = express();
app.server = http.createServer(app);

app.get('/', (req, res) => {

	// connect to your database
	sql.connect(config, function (err) {

	    if (err) console.log(err);

	    // create Request object
	    var request = new sql.Request();
	       
	    // query to the database and get the records
	    request.query('select * from DataLogs', function (err, recordset) {
	        
	        if (err) console.log(err)

	        // send records as a response
	        res.send(recordset);
	        
	    });
	});
}); 


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
  
