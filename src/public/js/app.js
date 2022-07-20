//const socket = new WebSocket("http://localhost:3000"); // 이건 http 호출이라 반응 X
const socket = new WebSocket(`ws://${window.location.host}`); // window.location은 접속한 장소의 호스트를 반환해주는 속성

socket.addEventListener("open", () => {
  console.log("connected to Server");
});

socket.addEventListener("message", (message) => {
  console.log("Just got this", message.data, "from the server");
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server");
});

setTimeout(() => {
  socket.send("hello from browser!");
}, 5000);
