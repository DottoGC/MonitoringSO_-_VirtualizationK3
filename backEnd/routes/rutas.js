const express=require('express');
const router = express.Router();

const data = require('../controllers/data');

router.get('/saludo', data.getData);
router.get('/departamentos', data.getDataDep);
router.get('/edades', data.getDataEdades);
router.post('/addData', data.insertarCaso);

module.exports=router;