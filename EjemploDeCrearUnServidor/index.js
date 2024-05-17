const http = require('http')

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('Hola Mundo IN6AV')
}).listen(3000)

console.log('El servidor esta corriendo')