// steps to  generate json server

// 1.import json-server
const jsonServer = require('json-server')

//2. creater our own server to run json file
const server =jsonServer.create()

//3.generate middleware to use in json server
const middleware = jsonServer.defaults()

//4. set up path for db.json
const router = jsonServer.router("db.json")

//5.setup port for server
const port = 3000 || Process.env.PORT

// 6.use middleware, router , to server
server.use(middleware)
server.use(router)

//server listen / run to request
server.listen(port,()=>{
    console.log("Employee portal server started at port no:"+port);
})