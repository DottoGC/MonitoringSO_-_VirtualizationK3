const express = require('express');
const morgan=require ('morgan');
const cors= require('cors');
const app = express();

const {moongose} = require ('./dbmongo');
//settings
app.set('port', process.env.PORT || 3000);
//midelwares

app.use(cors({origin: 'http://frontend-srv:4200'}));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://frontend-srv:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});//*/
app.use(morgan('dev'));
app.use(express.json());
app.use(require('./routes/rutas'));

//Routes

// settings
app.listen(app.get('port'), () => {
  console.log('Example app listening on port 3000!');
});