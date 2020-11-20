import http from 'http';
import bodyParser from 'body-parser';
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


const port = 8080

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Device API is up and running');
});

app.get('/listAll', (req, res) => {

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


app.post('/insertNew', (err, req, res) => {
//    console.log(req.body)
    console.log('req.IncomingMessage.body')
    console.log(req.IncomingMessage.body)

    var seatbackId = req.body.seatbackId;
    var email = req.body.email;
    var timestamp = req.body.timestamp;
    var seatbackpoints = req.body.seatbackpoints; 
    var posture = req.body.posture; 
    var dynamic = req.body.dynamic;
    var breaks = req.body.breaks; 
    var timetobreak = req.body.timetobreak;
    var country = req.body.country;

    if (err) console.log(err);

	sql.connect(config, function (sqlerr) {
	    if (sqlerr) console.log(sqlerr);

	    var request = new sql.Request();
	    request.query('insert into datalogs values (' + value + ')', function (sqlerr2, recordset) {
	        
	        if (sqlerr2) console.log(sqlerr2)
	        res.send('Success!');
	    });
	});
}); 

app.post('/insertNewHistory', (err, req, res) => {
    var seatbackId = req.body.seatbackId;
    var email = req.body.email;
    var timestamp = req.body.timestamp;
    var seatbackhistory = req.body.seatbackhistory;
    var posturehistory = req.body.posturehistory;
    var dynamichistory = req.body.dynamichistory;
    var breakshistory = req.body.breakshistory;

    if (err) console.log(err);

	sql.connect(config, function (sqlerr) {
	    if (sqlerr) console.log(sqlerr);

	    var request = new sql.Request();
	    request.query('insert into datalogs values (' + value + ')', function (sqlerr2, recordset) {
	        
	        if (sqlerr2) console.log(sqlerr2)
	        res.send('Success!');
	    });
	});
}); 

app.server.listen(port, err => {
    if(err){
        console.log("-->> Error 1: " + err);
    }
}); 



// //json
// 	URL : http://18.198.125.245/insertNew 
// 	Method : POST
// //Body 
// 	seatbackId : {seat id}
// 	email : {user email}
// 	timestamp : {sent time}
// 	seatbackpoints : {seatback points} 
// 	posture : {posture score} 
// 	dynamic : {dynamic score} 
// 	breaks : {breaks score} 
// 	timetobreak : {time to break}
// 	country : {country}
  
// //json
// 	URL : http://18.198.125.245/insertNewHistory 
// 	Method : POST
// //Body 
// 	seatbackId : {seat id}
// 	email : {user email}
// 	timestamp : {sent time}
// 	seatbackhistory : [monthly [0], monthly [1], monthly [2] .. monthly [31]] //comma seprated string
// 	posturehistory : [monthly [0], monthly [1], monthly [2] .. monthly [31]] //comma seprated string
// 	dynamichistory : [monthly [0], monthly [1], monthly [2] .. monthly [31]] //comma seprated string
// 	breakshistory : [monthly [0], monthly [1], monthly [2] .. monthly [31]] //comma seprated string
// 	timestamp : {sent time}

