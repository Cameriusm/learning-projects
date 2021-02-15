const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI =
  'mongodb+srv://scott:scott123@node.w5sri.mongodb.net/node?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
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

// // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog',
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('602a18be2128c175f6dbfe03')
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

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
  // const blogs = [
  res.redirect('/blogs');
  //   {
  //     title: 'Yoshi finds eggs',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur',
  //   },
  //   {
  //     title: 'Mario finds stars',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur',
  //   },
  //   {
  //     title: 'How to defeat bowser',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur',
  //   },
  // ];
  // res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  //   res.send('<p>About page</p<');
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
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
