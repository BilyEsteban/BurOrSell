import server from "./server"

server.set('port', process.env.PORT || 3000);

server.listen(server.get('port'));

console.log(`Server on port ${server.get('port')}`)