const date = new Date();

const monthDays=document.querySelector('.day')

const lastDay=new Date(date.getFullYear(),date.getMonth(),1);

console.log(lastDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
document.querySelector(".date h2").innerHTML =
    months[date.getMonth()];
let days="";

for (let i=1;i<=31;i++){
    days += '<td>${i}</td>';
}