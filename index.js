// /* eslint-disable no-console */
// const express=require('express');
// const cors=require('cors');
// const routerApi=require('./routes');
// const {logErrors,errorHandler,boomErrorHandler}=require('./middlewares/error.handler')

// const app=express();

// const port=process.env.PORT||3000;
// app.use(express.json()) 

// app.use(cors());
// routerApi(app);

// app.get('/',(req,res)=>{
//   res.send('servidor de express');
// })

// //orden de las lineas da la secuencia
// app.use(logErrors);
// app.use(boomErrorHandler);
// app.use(errorHandler);

// app.listen(port, () => {
//   console.log('mi port ' + port); //console.log resaltado por mala práctica
// });

// //simple server without express
const http=require('http');
const port=process.env.PORT||3000;
const server=http.createServer((req,res)=>{
  res.end('hello world');
}
);
server.listen(port);
console.log('server running on port '+port);

export default port;