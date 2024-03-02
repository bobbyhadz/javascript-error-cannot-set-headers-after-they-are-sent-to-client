// Cannot set headers after they are sent to the client in JS

import express from 'express';

const app = express();

// Only call a single function that sends a response to the client
app.get('/', (req, res) => {
  if (5 === 5) {
    return res.send('Hello');
  } else if (10 === 50) {
    return res.send('Bye');
  }

  return res.send('This also runs');
});

const port = 3445;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
