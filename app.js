require ('dotenv').config();
// const evn = require('dotenv');
const express = require('express');
const hbsExpress = require('express-handlebars');
// routes
const routHome=require('./routes/rout_home.js');

const PORT =process.env.PORT;
const app = express();




// creamos
const hbs=hbsExpress.create({
    layoutsDir:"views/layouts",
    defaultLayout:"main",
    extname:"hbs",
});

// registramos el engine
app.engine('hbs', hbs.engine);
// aplicamos este engine
app.set("view engine", 'hbs');
// la carpeta estatica
app.set('views', 'views');
// app.use(express.static(`public`));
// bootstrap
app.use('/css/bootstrap.min.css', express.static('node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use('/js/bootstrap.min.js', express.static('node_modules/bootstrap/dist/js/bootstrap.min.js'));

// para elaborar los requisitos POST
app.use(express.urlencoded({expended:true}));


// routes
app.use('/', routHome);

app.listen();