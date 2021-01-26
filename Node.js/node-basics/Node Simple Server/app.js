const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongodb
const dbURI =
  'mongodb+srv://scott:scott123@node.w5sri.mongodb.net/node?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(3000);
    console.log('connected to db');
  })
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// to change view engine directory
// app.set('views', 'myviews');

// listen for requests

//middleware & static files
app.use(express.static('public'));

app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Next piece of middleware');
//   next();
// });

app.get('/', (req, res) => {
  //   res.send('<p>Home page</p<');
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Mario finds stars',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'How to defeat bowser',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  //   res.send('<p>About page</p<');
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// // redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
