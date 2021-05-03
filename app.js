const path = require('path');
const https = require('https')
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')  //call Morgan
const exphbs = require('express-handlebars') //handlebars
const passport = require('passport')  // Passport
const connectDB = require('./config/db');  //import database connection Mongodb
// const { resourceUsage } = require('process'); 
const session = require('express-session')


//Load config (create config file)
dotenv.config ({path:'./config/config.env'});

//Passport config
 require('./config/passport')(passport)

//call database
connectDB()
//call express
const app = express ();

//morgan listener (Development) [Logging Tool]
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Handlebars  (templating engine...unnecessary??)
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Passport session
app.use(session ({
    secret: "bombchickawowow",
    resave: false,
    saveUninitialized: false,
    // cookie:{ secure:true } only works with https
}))
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static Folders
app.use (express.static(path.join(__dirname,'assets')))
//Routes
// routes are defined in the index.js folder

// Call that file here to determine routing -- when needed, what file should it call to be programmed?
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

//declare port use default OR 5001
const PORT = process.env.PORT || 3001
//run
app.listen(
    PORT, 
    console.log(`Its alive ${process.env.NODE_ENV} on port ${PORT}!!!`)
)