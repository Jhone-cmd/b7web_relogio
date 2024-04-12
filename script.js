let digitalElement = document.querySelector(".digital");
let hoursElement = document.querySelector(".p_h");
let minutesElement = document.querySelector(".p_m");
let secondsElement = document.querySelector(".p_s");

function updateClock() {

    let clock = new Date();

    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    // Relógio Analógico

    let hoursDegrees = ((360 / 12) * hours) -90;
    let minutesDegrees = ((360 / 60) * minutes) -90;
    let secondsDegrees = ((360 / 60) * seconds) -90;

    hoursElement.style.transform = `rotate(${hoursDegrees}deg)`;
    minutesElement.style.transform = `rotate(${minutesDegrees}deg)`;
    secondsElement.style.transform = `rotate(${secondsDegrees}deg)`;

    // Relógio Digital

    function fixZero(time) {
        return time < 10 ? `0${time}` : time;
    }

    digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;   
    
}

setInterval(updateClock, 1000);
updateClock();
