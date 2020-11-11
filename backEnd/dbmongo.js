const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/datosCorona', {
mongoose.connect('mongodb://35.193.215.215:27017/datosCorona', {
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err))