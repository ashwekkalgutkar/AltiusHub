const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(5000,()=>{
    console.log('JSON server is running on port 5000');
    
})