//-----------------------------------------------//
//------------Dynamic progress bar--------------//
//---------------------------------------------//

//calculate dates, find amount of time spent in %  => update progress bar
function updateProgressBar(elementClass, timePassed) {
    var elem = document.getElementsByClassName(elementClass)[0],
        width = 0;
    var id = setInterval(frame, 100); 
    function frame() {
        if (width >= 100) {                     // if currentDate > finish date
            elem.innerHTML = "Finished";
            clearInterval(id)
        } else if (width < timePassed) {       // time passed in percents 0-100
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';  
            elem.style.maxwidth = timePassed + '%'; //
        }
    }
}

// months counting start from 0 //January-0, //December-11

var _MS_PER_HOURS = 1000 * 60 * 60,
    currDate = new Date(); 


function dateDiff(a, b) {
    //dateDiff in Hours
    // Discard the time and time-zone information. UTC time never observes daylight saving time
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_HOURS);
}

function passedTime(dateSt, dateFin) {
    var allHours = dateDiff(dateSt, dateFin);       //amount of hours needed for learning 1 subject
    var timePassed = dateDiff(dateSt, currDate);

    var timePercentage = timePassed * 100 / allHours;
    
    return timePercentage;
}


// ------------------JS-------------------

var jsStart = new Date(2017, 05, 01),
    jsEnd = new Date(2017, 08, 02);

updateProgressBar("jsBar", passedTime(jsStart, jsEnd))

//-------------------SQL------------------

var sqlStart = new Date(2017, 05, 12),
    sqlEnd = new Date(2017, 06, 13);

updateProgressBar("sqlBar", passedTime(sqlStart, sqlEnd))
