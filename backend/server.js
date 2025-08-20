const http = require('http');
const app = require('./app')
const { initializeSocket } = require('./socket')
const port = process.env.port || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server has started on port ${port}`);
})