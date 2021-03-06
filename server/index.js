// Request Parsing
const express = require('express');

const app = express();
const cors = require('cors');

// Router
const router = require('./routes.js');

// Middleware Execution
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

// Configure Cors policy
app.use(cors());

// Server Port
const PORT = 3000;
app.set('port', PORT);

// Set up our routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
