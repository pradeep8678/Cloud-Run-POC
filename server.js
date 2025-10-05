const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Pub/Sub endpoint
app.post('/', (req, res) => {
  const message = req.body.message?.data
    ? Buffer.from(req.body.message.data, 'base64').toString()
    : 'No data';
    
  console.log(`🚀 Received alert message: ${message}`);
  res.status(200).send('OK');
});

// Start server on PORT defined by environment variable
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
