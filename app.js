// Treehouse Full Stack Javascript Tech Degree
// PROJECT 06

// NODE MODULES
const express = require('express');
const bodyParser = require('body-parser');


// --------- Express Configuration -------------
// create a new express app
const app = express();

// tell express to use body-parser, no extended option, this appears also required for pug
app.use(bodyParser.urlencoded({extended: false}));

// static files use static route and public folder
app.use('/static', express.static('public'));


// Use 'pug' for templating
app.set('view engine', 'pug');

// -------------------- ROUTES -------------------
app.get('/', (req, res) => {
  res.render('about');
});



// Nodemon development server
app.listen(3000, () => {
  console.log('|-------------- APP IS RUNNING ON 3000 -------------|');
});