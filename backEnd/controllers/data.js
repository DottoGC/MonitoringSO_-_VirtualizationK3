const dataCtrl={};
const data= require('../models/CoronaDatos');
const redis = require('redis');
//ceate redis client
let client =redis.createClient(6379,'35.193.215.215');
//let client =redis.createClient();
client.on('connect', function(){
    console.log('Conectado a Redis');
});

dataCtrl.getData = async (req,res) => {
    
    /*/res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    */
    const datos = await data.find();
    let datosFormR = client.hgetall('datosCovid',(err,obj)=>{
        if(!obj){
            //console.log('error no existe informacion');
            res.json({obj, datos});
        }else{
            const datosFormRedis = obj;
            //console.log(datosFormRedis);
            res.json({datosFormRedis, datos});
        }
    });
}

dataCtrl.getDataDep = async (req,res) => {
    const datos = await data.aggregate([{$group: {_id:"$Departamento",contador: {$sum:1}}},{$sort:{contador:-1}}]).limit(3);
    const datosgraph = await data.aggregate([{$group: {_id:"$Departamento",contador: {$sum:1}}},{$sort:{contador:-1}}]);
    res.json({datos,datosgraph});
}
dataCtrl.getDataEdades = async (req,res) => {
    let datosFormR = client.mget(['0-30','31-40','41-50','51-60','61-70','71-80','mayores_a_80'],(err,obj)=>{
        if(!obj){
            //console.log('error no existe informacion');
            res.json({obj, datos});
        }else{
            const datosFormRedis = {uno:obj[0],dos:obj[1],tres:obj[2],cuatro:obj[3],cinco:obj[4],seis:obj[5],siete:obj[6]};
            //console.log(datosFormRedis);
            res.json({datosFormRedis});
        }
    });
}

dataCtrl.insertarCaso = async(req, res)=>{
    const {Nombre,Departamento, Edad,Forma_contagio, Estado}=req.body;
    console.log(req.body);
    const errors=[];
    if(!Nombre){
        errors.push({text:'Debe poner el nombre'});
    }
    if(!Departamento){
        errors.push({text:'Debe colocar el departamento'});
    }
    if(!Edad){
        errors.push({text:'Debe escribir una edad'});
    }
    if(!Forma_contagio){
        errors.push({text:'Debe especificar la forma de contagio comunitario o exportado'});
    }
    if(!Estado){
        errors.push({text:'Debe escribir el estado actual activo o inactivo'});
    }
    if(errors.length>0){
        res.json({
            errors,
            Nombre,
            Departamento,
            Edad,
            Forma_contagio,
            Estado
        });
    }else{
        const newDato = new data({Nombre,Departamento,Edad,Forma_contagio,Estado});
        await newDato.save();
        await client.hmset('datosCovid',[
            'Nombre', Nombre,
            'Departamento', Departamento,
            'Edad', Edad,
            'Forma_contagio', Forma_contagio,
            'Estado', Estado
        ]);
        if (Edad<=30) {
            await client.INCR('0-30');
        }else if (Edad>30 && Edad<=40) {
            await client.INCR('31-40');
        }else if (Edad>40 && Edad<=50) {
            await client.INCR('41-50');
        }else if (Edad>50 && Edad<=60) {
            await client.INCR('51-60');
        }else if (Edad>60 && Edad<=70) {
            await client.INCR('61-70');
        }else if (Edad>70 && Edad<=80) {
            await client.INCR('71-80');
        }else{
            await client.INCR('mayores_a_80');
        }
        res.json({'exito':'exitoso'});
    }
}

module.exports= dataCtrl;