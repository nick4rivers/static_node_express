// Treehouse Full Stack Javascript Tech Degree
// PROJECT 06


// NODE MODULES
const express = require('express');
const bodyParser = require('body-parser');

// --------- Express Configuration -------------
// create a new express app
const app = express();

// Use 'pug' for templating
app.set('view engine', 'pug');

// tell express to use body-parser, no extended option, this appears also required for pug
app.use(bodyParser.urlencoded({extended: false}));

// static files use static route and public folder
app.use('/static', express.static('public'));

// ------------------- STATIC DATA FILE -----------------
const data = require('./data.json');
// const myProjects = data.projects;

// -------------------- ROUTES -------------------
app.get('/', (req, res) => {
  res.render('about');
});

// index - photos should be 550 X 550
app.get('/index', (req, res) => {
  res.render('index', data);
});

// project detail
// project detail - photos should be 1200 X 550
app.get('/project/:id', (req, res) => {
  const id = req.params.id;
  res.render('project', data.projects[id]);
});


// --------------- ERROR HANDLING -------------------------
app.use((req, res, next) => {
  const err = new Error('Oh Crap!!');
  err.status = 404;
  next(err);
});

// General error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  // call my template, and pass the err object
  res.render('error', err);
  console.log(err.message + " - " + err.status);
});

// Nodemon development server
app.listen(3000, () => {
  console.log('|-------------- APP IS RUNNING ON 3000 -------------|');
});