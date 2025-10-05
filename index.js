const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Cloud Run! Memory Scaling Project is running.');
});

app.listen(port, () => {
  console.log(`Web app listening on port ${port}`);
});
