const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express();

// Gets all members
app.get('/api/members', (req, res) => {
  res.json(members);
});

// app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
