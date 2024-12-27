require ('dotenv').config();
const path = require('path');
// const evn = require('dotenv');
const express = require('express');
const hbsExpress = require('express-handlebars');
// routes
const routHome=require('./routes/rout_home.js');
const routProductos=require('./routes/productos.js');
const routContactos=require('./routes/contactos.js');

const PORT =process.env.PORT || 3000;
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
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(`public`));
// bootstrap
app.use('/css/bootstrap.min.css', express.static('node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use('/js/bootstrap.min.js', express.static('node_modules/bootstrap/dist/js/bootstrap.min.js'));

// para elaborar los requisitos POST
app.use(express.urlencoded({expended:true}));


// prefix, routes
app.use('/', routHome);
app.use('/productos', routProductos);
app.use('/contactos', routContactos);

// app.listen(PORT,()=>{console.log(`http://localhost:${PORT}`);});
app.listen(PORT,()=>{console.log(`http://localhost:${PORT}`);});
