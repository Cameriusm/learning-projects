const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');

const app = express();

// Body Parser MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Iniit middleware
// app.use(logger);

// app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/member'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
