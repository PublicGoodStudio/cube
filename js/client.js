var ws = new WebSocket('ws://192.168.66.101:8889');

  ws.onopen = function open() {
    console.log('connected to server')
  };

  ws.onmessage = function incoming(data, flags) {
    var image_to_scroll = new Image();
    image_to_scroll.src = 'img/flow-er.png';
    document.body.appendChild(image_to_scroll);
}
