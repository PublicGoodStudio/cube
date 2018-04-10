const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8889, clientTracking: true });
var CLIENTS=[];



//when we have two connections, we send a start-scrolling message to
// the client that connected first. we set a callback to start the
// second client in 3.2 seconds

wss.on('connection', (client) => {
	console.log(wss.clients.size);
	CLIENTS.push(client);

	if (wss.clients.size === 2){
		//send message to client 1 to start scrolling
		//start callback that will kick off client 2's scrolling
		sendScrollPrompt(CLIENTS[0]);
		setTimeout(function(){sendScrollPrompt(CLIENTS[1])},3200);
	}
});


function sendScrollPrompt(client) {
	if (client.readyState === WebSocket.OPEN) {
      client.send('ws is dope');
		} else {
			console.log('client readystate not set to open');
		}
			console.log('sending note');
};
