	
	const express = require('express')
	const port = 8080

	let app = express();
	app.server = http.createServer(app);

	app.get('/', (req, res) => res.send('Hello World!'))

	app.server.listen(port, err => {
	    if(err){
	        console.log("-->> Error 1: " + err);
	    }
	}); 

