import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");
const server = http.createServer(app); // 노드 js의 http 패키지로 express로 만든 서버 애플리케이션 제공 http서버 생성
const wss = new WebSocket.Server({ server }); // 웹소켓 서버 생성

// function handleConnection(socket) {
//   console.log(socket);
// }

// wss.on("connection", handleConnection);

wss.on("connection", (socket) => {
  //익명함수로 표현하기
  // console.log(socket);
  console.log("Connected to Browser");
  socket.on("close", () => console.log("Disconnected from Browser"));
  socket.on("message", (message) => {
    console.log(`${message}`);
  });
  socket.send("hello!");
});

server.listen(3000, handleListen);
