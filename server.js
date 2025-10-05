const express = require('express');
const app = express();


const port = process.env.PORT || 9090;

app.get('/', (req, res) => {
  res.send('Hello from Pradeep Run! Memory Scaling Project is running on port ' + port);
});

app.listen(port, () => {
  console.log(`Web app listening on port ${port}`);
});


// const express = require('express');
// const app = express();

// // Use a different port (not 8080)
// const port = process.env.PORT || 9090;

// // Normal endpoint
// app.get('/', (req, res) => {
//   res.send('Hello from Cloud Run! Memory Scaling Project is running on port ' + port);
// });

// // Memory stress endpoint for testing autoscaling
// app.get('/stress-memory', (req, res) => {
//   // Allocate a large array in memory
//   const size = parseInt(req.query.mb) || 100; // MB to allocate
//   const memoryHog = [];

//   for (let i = 0; i < size * 1024 * 1024 / 8; i++) { // 8 bytes per Number
//     memoryHog.push(i);
//   }

//   console.log(`Allocated approximately ${size} MB of memory`);

//   res.send(`Memory stress test: allocated ~${size} MB of memory. Check your Cloud Run autoscaling.`);
// });

// app.listen(port, () => {
//   console.log(`Web app listening on port ${port}`);
// });
