const express = require('express');
const morgan=require ('morgan');
const cors= require('cors');
const app = express();

const {moongose} = require ('./dbmongo');
//settings
app.set('port', process.env.PORT || 3000);
//midelwares
app.use(express.json());
app.use('/api', require('./routes/rutas'));

//Routes

// settings
app.listen(app.get('port'), () => {
  console.log('Example app listening on port 3000!');
});