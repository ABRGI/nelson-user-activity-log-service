// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// defining the port
var port = 8080;

// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send([
        {title: 'Hello, world (again)!'}
      ]);
});

// starting the server
app.listen(port, () => {
    console.log(`listening on port ${ port }`);
});