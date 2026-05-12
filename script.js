//動作確認1
let now,year,month;
now = new Date();
year = now.getFullYear();
month = now.getMonth() + 1;
console.log(now);
console.log(year);
console.log(month);
//動作確認1終了


//カレンダー作成動作
function makecalender(){

document.getElementById("nowmonth").textContent = year + "年" + month + "月";
let days = new Date(year, month, 0).getDate();
let callender = document.getElementById("calendar");
let row = document.createElement("tr");
let firstday = new Date(year,month - 1,1).getDay();

for (let i = 0; i < firstday; i++){
    let emptycell = document.createElement("td");
    row.appendChild(emptycell);
}

for (let i = 1; i <= days; i++){
    let cell = document.createElement("td");
    cell.textContent = i;
    row.appendChild(cell);

    if ((firstday + i - 1) % 7 === 6) {
        calender.appendChild(row);
        row = document.createElement("tr")
    }
}

if(row.children.length > 0){
while (row.children.length < 7){
    let emptycell = document.createElement("td");
    row.appendChild(emptycell);
}
    calender.appendChild(row);
}
calender.appendChild(row);

}
//カレンダー動作終了

makecalender();

//月移動
document.getElementById("next").onclick = function(){
    month++;
    calender.innerHTML = "";
    if (month > 12){
    month = 1;
    year++;
    }
    if(month < 1){
    month = 12;
    year--;
    }
    makecalender();
}

document.getElementById("prev").onclick = function(){
    month--;
    calender.innerHTML = "";
    if (month > 12){
    month = 1;
    year++;
    }
    if(month < 1){
    month = 12;
    year--;
    }
    makecalender();
}
//月移動終了

//firebase
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  import {
    getFirestore,
    collection,
    addDoc
  }from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDeRw57ChkOr7OUBSurL_8aLSGkk041Gdw",
    authDomain: "calendar-a6b25.firebaseapp.com",
    projectId: "calendar-a6b25",
    storageBucket: "calendar-a6b25.firebasestorage.app",
    messagingSenderId: "752642931749",
    appId: "1:752642931749:web:d5b6c15a19fd7f091053cc",
    measurementId: "G-SDJ4J0PH71"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  //firebase終了
