
// let stopwatch = {
//     millisecs=0,
//     seconds=0,
//     minutes=0,
//     hours=0,

//     start: function() {
//         this.timer = setInterval(this.update, 1000);
//     },

//     stop: function() {
//         clearInterval(this.timer);
//     },

//     reset: function() {
//         this.millisecs = 0;
//         this.seconds = 0;
//         this.minutes = 0;
//         this.hours = 0;
//         this.update();
//     },

//     update: function() {
//         this.millisecs++;
//         if(this.millisecs == 100)
//         {
//             this.millisecs = 0;
//             this.seconds++;
//         }

//         if(this.seconds == 60)
//         {
//             this.seconds = 0;
//             this.minutes++;
//         }

//         if(this.minutes == 60)
//         {
//             this.minutes = 0;
//             this.hours++;
//         }


//     }
// };




let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');


let millisecs = 00;
let seconds = 00;
let minutes = 00;
let hours = 00;


start.addEventListener('click', function() {
    timer = true;
    stopWatch();
});

stop.addEventListener('click', function() {
    timer = false;
});

reset.addEventListener('click', function() {
    timer = false;
    millisecs = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milsec').innerHTML = "00";

});

function stopWatch() {
    if(timer)
        millisecs++;

        if(millisecs == 100)
        {
            seconds++;
            millisecs = 0;
        }

        if(seconds == 60)
        {
            minutes++;
            seconds = 0;
        }

        if(minutes == 60)
        {
            hours++;
            minutes = 0;
            seconds = 0;
        }

        let hrstr = hours;
        let minstr = minutes;
        let secstr = seconds;
        let milsecstr = millisecs;

        if(hours < 10)
        {
            hrstr = "0" + hrstr;
        }

        if(minutes < 10)
        {
            minstr = "0" + minstr;
        }

        if(seconds < 10)
        {
            secstr = "0" + secstr;
        }

        if(millisecs < 10)
        {
            milsecstr = "0" + milsecstr;
        }


        document.getElementById('hr').innerHTML = hrstr;
        document.getElementById('min').innerHTML = minstr;
        document.getElementById('sec').innerHTML = secstr;
        document.getElementById('milsec').innerHTML = milsecstr;
        setTimeout(stopWatch, 10);

}