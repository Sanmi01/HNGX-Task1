const time = document.querySelector(".time")
const day = document.querySelector(".date");
const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];

function getCurrentDay(){
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    day.innerHTML =  daysOfWeek[dayOfWeek];
}

function getCurrentUTCTime(){
    const currentDate = new Date();
    time.innerHTML = currentDate.getTime();
}

getCurrentDay();
getCurrentUTCTime();
