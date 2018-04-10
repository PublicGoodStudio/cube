var ws = new WebSocket('ws://127.0.0.1:8889');

  ws.onopen = function open() {
    console.log('connected to server')
  };

  ws.onmessage = function incoming(data, flags) {
    console.log('received a message! ' + JSON.stringify(data));

    var image_to_scroll = new Image();
    image_to_scroll.src = 'img/polygons.png';
    document.body.appendChild(image_to_scroll);
}
