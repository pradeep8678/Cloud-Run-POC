// const express = require('express');
// const app = express();


// const port = process.env.PORT || 9090;

// app.get('/', (req, res) => {
//   res.send('Hello from Pradeep Run! Memory Scaling Project is running on port ' + port);
// });

// app.listen(port, () => {
//   console.log(`Web app listening on port ${port}`);
// });


const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

// Global array to consume memory
let memoryHog = [];

app.get('/', (req, res) => {
  // Allocate ~10MB of memory per request
  const sizeInMB = 10;
  const arr = new Array(sizeInMB * 1024 * 1024).fill('*');
  memoryHog.push(arr); // Keep reference so it isn't garbage collected

  res.send(
    `Hello from Pradeep Run! Memory Scaling Project is running on port ${port}. Memory is being stressed now!`
  );
});

app.listen(port, () => {
  console.log(`Web app listening on port ${port}`);
});
