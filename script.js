let now,year,month;
now = new Date();
year = now.getFullYear();
month = now.getMonth() + 1;
console.log(now);
console.log(year);
console.log(month)
let days = new Date(year, month, 0).getDate();

document.getElementById("today").textContent = now;
document.getElementById("nowmonth").textContent = month + "月";
let callender = document.getElementById("calendar");

for (let i = 1; i <= days; i++) {
    let day = document.createElement("div");
    day.textContent = i + "日";
    calendar.appendChild(day);
}


