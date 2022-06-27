let myName;
myName = document.querySelector("#myName");
myName.innerHTML = prompt("Lütfrn adınızı yazızınız")


function showTime(){
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    let d = new Date();
    let days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let myClock = document.querySelector("#myClock");
    myClock.innerHTML= hour+ ":" + minute + ":" + second + " " + days[d.getDay()];
}
let now = setInterval(showTime,100)