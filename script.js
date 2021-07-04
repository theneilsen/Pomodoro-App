const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const form = document.querySelector('form');
const input = document.getElementById('input_id');
const clock = document.getElementsByClassName('clock');
const app = document.getElementById('apprec');
const container = document.getElementsByClassName('container');

const goBtn = document.getElementById('done');
const el = document.getElementsByClassName('el');

let mins;
let secs;
let sec;

form.onsubmit = (e) => {
    if(!isNaN(input.value)) {
        if(input.value>1) {
            minsEl.innerHTML = input.value < 10 ? `0${input.value}` : input.value;
            mins = input.value;
            e.preventDefault();
            input.value = '';
            secs=(mins*60);
            secsEl.innerHTML = "00";
        }
        else alert("Too small for a session!")
    }
    else alert('Not a valid input');
}

countDown = () => {
    sec = secs;

    let minutes = Math.floor(decSec(sec)/60) % 60;
    let seconds = Math.floor(decSec(sec)) % 60;
    
    // console.log(seconds);

    minsEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);

    
    if (minutes === 00 && seconds === 00) {
        for(let i=0; i<clock.length; i++) {
            let l = container[i];
            l.classList.add('hidden');
            app.innerHTML = "Great job! You deserve some rest";
        }
    }
    
    if(minutes === 00 && seconds === 03) {
        secsEl.classList.add('color');
        minsEl.classList.add('color');
    }
}

decSec = (s) => {
    if (s > 0)
        s--;
        secs=s;
        return s, secs;
}

formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

startBtn.addEventListener('click', () => {
    !input.value === true
    if(true) {
        //console.log(input.value);
        setInterval(countDown, 1000);
    }

});

stopBtn.addEventListener('click', () => {
    location.reload();
});



