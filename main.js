function clock () {
    let hours = document.getElementById("hour");
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");
    let period = document.getElementById("pm");
    let year = document.getElementById("year");
    let date = document.getElementById("date");


    let d = new Date().getDate();
    let y = new Date().getFullYear();

    year.innerHTML = y;
    date.innerHTML = d;





    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = new Date().getHours();
    if ( m < 10 ) {
        m = "0" + m 
    }
    if ( s < 10 ) {
        s = "0" + s 
    }
    if ( h > 12 ) {
        h -= 12
    }
    if ( h < 10 ) {
        h = "0" + h 
    }

    if ( ampm >= 12) {
       period.innerHTML = "PM"
    }

    hours.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
}

setInterval(clock,1000)

