//動作確認1
let now,year,month;
now = new Date();
year = now.getFullYear();
month = now.getMonth() + 1;
console.log(now);
console.log(year);
console.log(month);
//動作確認1終了



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
makecalender();

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



