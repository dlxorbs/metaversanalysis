const firebaseConfig = {
  apiKey: "AIzaSyA-He_nduKwzu_yJF9IVYTEA51INsxhAdk",
  authDomain: "metaverseanalysis-2ef87.firebaseapp.com",
  projectId: "metaverseanalysis-2ef87",
  storageBucket: "metaverseanalysis-2ef87.appspot.com",
  messagingSenderId: "195438809768",
  appId: "1:195438809768:web:a057b48737f08b6153689d",
};  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// db.collection('post').get().then(function(qs){qs.forEach(function(doc){
//     tempData.push(doc.data())
  // console.log(tempData)
// })})

let totalData = {};
let clientsData = {};

function startTracking() {
intervalId =  setInterval(function () {
  for (let i in clientsData) {
    totalData[i].positiondata.push(clientsData[i].position)
    totalData[i].rotationdata.push(clientsData[i].rotation)
  }
  console.log(totalData)
}, 500);
}
socket.on("server-to-client", function (result) {
  clientsData[result.id] = result;
});



//트레킹을 시작하거나 끝낼때 누르는 버튼
let start_server = document.querySelector(".start_onlyServer");
let end_server = document.querySelector(".end_onlyServer");

start_server.addEventListener("click", () => {
  alert("모든 유저 데이터 측정을 시작합니다.");
  for (let i in clientsData) {
    totalData[i] = {
      id: i,
      positiondata: [],
      rotationdata: [],
    };
  }
  startTracking();
});

end_server.addEventListener("click", () => {

  clearInterval(intervalId);

  let promptObj = prompt(`모든 유저 데이터 측정을 종료합니다.
아래에 현재 프로젝트의 제목을 입력해주세요`, 'ex)메타버스 내의 광고판의 높이에 따른 사용자 집중정도 조사');

  db.collection('post').doc(promptObj).set(
    totalData
  )

  db.collection('post').doc('11-27').get().then(function(doc){
    console.log(doc.data())
  })

});

