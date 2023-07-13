const express = require('express');
const path = require('path');
const morgan = require('morgan');
const config = require('./config.js');
const cors = require('cors')

const app = express();

//importo rutas
const Routes = require('./routes/index.js');

// configuraciones
app.set('port', config.PORT);
app.listen(app.get('port'), ()=>{
    console.log("Aplicacion iniciada en el puerto " + app.get('port'));
})

// Configuracion de ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));


//middleares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', Routes);
//app.use('/ventas', Routes);



//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
