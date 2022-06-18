/* eslint-disable no-console */
const express=require('express');
const cors=require('cors');
const routerApi=require('./routes');
const {logErrors,errorHandler,boomErrorHandler}=require('./middlewares/error.handler')

const app=express();

const port=process.env.PORT||3000;
app.use(express.json()) 

app.use(cors());
routerApi(app);

app.get('/',(req,res)=>{
  res.send('servidor de express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('nueva ruta');
});

//orden de las lineas da la secuencia
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('mi port ' + port); //console.log resaltado por mala práctica
});
