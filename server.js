const express = require('express');
const app = express();

// Use a different port (not 8080)
const port = process.env.PORT || 9090;

app.get('/', (req, res) => {
  res.send('Hello from Cloud Run! Memory Scaling Project is running on port ' + port);
});

app.listen(port, () => {
  console.log(`Web app listening on port ${port}`);
});
