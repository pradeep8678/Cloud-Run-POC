const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// global retained array to simulate sustained memory usage
const retained = [];

app.get('/', (req, res) => {
  res.send('Hello — Cloud Run memory POC');
});

// allocate and retain memory (MB) to simulate high memory usage
// example: GET /leak?mb=200
app.get('/leak', (req, res) => {
  const mb = Math.max(1, parseInt(req.query.mb) || 50);
  const bytes = mb * 1024 * 1024;
  try {
    retained.push(Buffer.alloc(bytes));
    const mem = process.memoryUsage();
    res.json({
      message: `Allocated ${mb} MB and retained it (total retained buffers: ${retained.length})`,
      memoryUsage: mem
    });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// show current memory usage
app.get('/mem', (req, res) => {
  res.json(process.memoryUsage());
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
