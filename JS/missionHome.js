function setLocalStorage(btnType) {
    let keys = Object.keys(localStorage),
        i = keys.length;
    localStorage.setItem(i + 1, btnType)
}

/* //Create Text file function
var textFile = null;
var makeTextFile = function(text) {
    var data = new Blob([text], { type: 'text/plain' });
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
}; */
var teamNumber = localStorage.getItem(1);

document.getElementById('submit').addEventListener('click', () => {
    var keys = Object.keys(localStorage),
        x = keys.length;
    var textVal = [];
    for (var i = 2; i <= x; i++) {
        var values = localStorage.getItem(i);
        console.log(values);
        textVal.push(values);
    }
    var obj = [
        `{ "teamNum": ${teamNumber}, "metrics": "${textVal}" }`
    ];
    download('test.json', obj)
    localStorage.clear();

})

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}

var timeleft = 150;
var downloadTimer = setInterval(function() {
    timeleft--;
    document.getElementById("countdown").textContent = "Time left in match " + timeleft;
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById('countdown').style.color = 'red';
    } else if (timeleft <= 30) {
        document.getElementById('countdown').style.color = 'yellow';
    } else if (timeleft >= 135) {
        document.getElementById('countdown').style.color = 'green';
    } else {
        document.getElementById('countdown').style.color = 'lightgreen';
    }
}, 1000);

//Modal (popup) Stuff
var modal = document.getElementById("deliverModal");
document.getElementById("DelPower").onclick = function() {
    modal.style.display = "block";
}

var climbModal = document.getElementById("climbModal");
document.getElementById("Climb").onclick = function() {
    climbModal.style.display = "block";
}

var defenseModal = document.getElementById("modalDefense");
document.getElementById("defense").onclick = function() {
    defenseModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == climbModal) {
        climbModal.style.display = "none";
    } else if (event.target == defenseModal) {
        defenseModal.style.display = "none";
    }
}