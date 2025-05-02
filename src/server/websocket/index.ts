import * as Websocket from 'ws';
import * as http from "http";

const httpServer = http.createServer();
const clients = new Set();

export function startWebsocketServer() {
    
    const ws = new Websocket.Server({ server: httpServer });
    ws.on('connection', conn => {
        ClientConnected(conn);

        conn.on('message', message => {
            console.log('received: %s', message);
            conn.send(`Hello, you sent -> ${message}`);
        });
        conn.send('Hi there, I am a WebSocket server');
    });

    const port = process.env.WEBSOCKET_PORT || 8080;
    httpServer.listen(port, () => console.log(`Websocket server started on port ws://localhost:${port}!`));
}

function ClientConnected(conn: Websocket) {
    console.log("Client connected");
    clients.add(conn);
    conn.on("close", () => ClientDisconnected(conn));
}
function ClientDisconnected(conn: Websocket) {
    console.log("Client disconnected");
    clients.delete(conn);
}


// function broadcast(message) {
//     clients.forEach(client => {
//         client.send(message);
//     });
// }

