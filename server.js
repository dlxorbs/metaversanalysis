const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);
app.ws("/socket", (ws, req) => {
  console.log("클라이언트가 연결되었습니다.");

  // 클라이언트로부터의 메시지 수신 처리
  ws.on("message", (message) => {
    console.log("받은 메시지:", message);
    // 연결된 모든 클라이언트에 메시지 전송
    expressWs.getWss().clients.forEach((client) => {
      client.send(message);
    });
  });

  // 클라이언트 연결 끊김 처리
  ws.on("close", () => {
    console.log("클라이언트가 연결을 끊었습니다.");
  });
});

app.listen(8080);
