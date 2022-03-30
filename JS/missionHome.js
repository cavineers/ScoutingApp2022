let g = 0;
let dr = 0;
let db = 0;
let dt = 0;
let c = 0;
let dp = 0;
let dd = 0;
let dpu = 0;
let adc = 0;
let ch = 1;
let mi = 0;

function setLocalStorage(btnType) {
    let keys = Object.keys(localStorage),
        i = keys.length;
    sessionStorage.setItem(i + 1, btnType);
} // Old Function Pair

let ballCount = parseInt(sessionStorage.getItem("Cargo_start"));
document.getElementById("ballCount").innerHTML = ballCount;
let ballCount2 = parseInt(sessionStorage.getItem("Cargo_start"));
document.getElementById("ballCount2").innerHTML = ballCount;
let defenseCounter = 0;
document.getElementById("defenseCounter").innerHTML = defenseCounter;
let lastAction = document.getElementById('lastAction');

function setLocalPickup() {
    ballCount += 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 += 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount == 2) {
        document.getElementById("ballCount").style.color = "red";
    }
    if (ballCount == 3) {
        document.getElementById('undoAlert').style.display = "block"
    }
    g++
    sessionStorage.setItem('pickup_cargo', g);
    lastAction.innerHTML = 'Pick Up Ball';
    sessionStorage.setItem('lastAction', 'pickUp');
}

function setLocalMissed() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 2) {
        document.getElementById("ballCount").style.color = 'white';
    }
    mi++
    sessionStorage.setItem('missedCargo', mi);
    lastAction.innerHTML = 'Missed Shot';
    sessionStorage.setItem('lastAction', 'missed');
}

function setLocalDropped() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 2) {
        document.getElementById("ballCount").style.color = 'white';
    }
    dr++
    sessionStorage.setItem('cargoDropped', dr)
    lastAction.innerHTML = 'Dropped Cargo';
    sessionStorage.setItem('lastAction', 'drop');
}

function setLocalDeliverbot() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 2) {
        document.getElementById("ballCount").style.color = 'white';
    }
    db++
    sessionStorage.setItem('deliverCargo_bottom', db)
    lastAction.innerHTML = 'Deliver to bottom';
    sessionStorage.setItem('lastAction', 'delbot');
}

function setLocalDelivertop() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 2) {
        document.getElementById("ballCount").style.color = 'white';
    }
    dt++
    sessionStorage.setItem('deliverCargo_top', dt)
    lastAction.innerHTML = 'Deliver to top';
    sessionStorage.setItem('lastAction', 'deltop');
}

function delAutoCargo() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 2) {
        document.getElementById("ballCount").style.color = 'white';
    }
    adc++;
    sessionStorage.setItem('AUTONOMOUS_Deliver', adc);
    lastAction.innerHTML = 'Auto Deliver';
    sessionStorage.setItem('lastAction', 'autoDel');
}

function crossHab() {
    sessionStorage.setItem('AUTONOMOUS_Cross', ch);
    lastAction.innerHTML = 'Auto Cross';
    sessionStorage.setItem('lastAction', 'autoCross');
}

function setLocalClimbAtt() {
    c++
    sessionStorage.setItem('climbAttempt', c)
    climbModal.style.display = "none";
    lastAction.innerHTML = 'Fell Off';
    sessionStorage.setItem('lastAction', 'attClimb');
}

function setLocalClimbL1() {
    c++
    sessionStorage.setItem('climbL1', c)
    climbModal.style.display = "none";
    lastAction.innerHTML = 'Complete Climb Level 1';
    sessionStorage.setItem('lastAction', 'climbL1');
}

function setLocalClimbL2() {
    c++
    sessionStorage.setItem('climbL2', c)
    climbModal.style.display = "none";
    lastAction.innerHTML = 'Complete Climb Level 2';
    sessionStorage.setItem('lastAction', 'climbL2');
}

function setLocalClimbL3() {
    c++
    sessionStorage.setItem('climbL3', c)
    climbModal.style.display = "none";
    lastAction.innerHTML = 'Complete Climb Level 3';
    sessionStorage.setItem('lastAction', 'climbL3');
}

function setLocalClimbL4() {
    c++
    sessionStorage.setItem('climbL4', c)
    climbModal.style.display = "none";
    lastAction.innerHTML = 'Complete Climb Level 4';
    sessionStorage.setItem('lastAction', 'climbL4');
}



function defensePin() {
    defenseCounter++;
    document.getElementById("defenseCounter").innerHTML = defenseCounter;
    dp++;
    sessionStorage.setItem('pinned_bot', dp)
    lastAction.innerHTML = 'Pinned Bot';
    sessionStorage.setItem('lastAction', 'pinBot');
}

function defensePush() {
    defenseCounter++;
    document.getElementById("defenseCounter").innerHTML = defenseCounter;
    dpu++;
    sessionStorage.setItem('push_bot', dpu)
    lastAction.innerHTML = 'Pushed Bot';
    sessionStorage.setItem('lastAction', 'pushBot');
}

function defenseDis() {
    defenseCounter++;
    document.getElementById("defenseCounter").innerHTML = defenseCounter;
    dd++;
    sessionStorage.setItem('disrupted_bot', dd)
    lastAction.innerHTML = 'Disabled Bot';
    sessionStorage.setItem('lastAction', 'defDis');
}


var teamNumber = sessionStorage.getItem('team_key');
var matchNum = sessionStorage.getItem('match_key');
var startingCargo = sessionStorage.getItem('Cargo_start');

document.getElementById('submit').addEventListener('click', () => {
    window.location.replace('summary.html');
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
    document.getElementById("countdown").textContent = "Time left " + timeleft;
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
document.getElementById("DelCargo").onclick = function() {
    modal.style.display = "block";
}

var autoModal = document.getElementById('autoModal');
document.getElementById('autoMode').onclick = function() {
    autoModal.style.display = "block";
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
    } else if (event.target == autoModal) {
        autoModal.style.display = 'none';
    }
}

function undo() {
    let lastMove = sessionStorage.getItem('lastAction');
    document.getElementById('undoAlert').style.display = "none";

    if (lastMove == 'pickUp') {
        ballCount -= 1;
        document.getElementById("ballCount").innerHTML = ballCount;
        ballCount2 -= 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount <= 2) {
            document.getElementById("ballCount").style.color = 'white';
        }
        g--
        sessionStorage.setItem('pickup_cargo', g);
    } else if (lastMove == 'missed') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 2) {
            document.getElementById("ballCount").style.color = "red";
        }
        mi--
        sessionStorage.setItem('missedCargo', mi);
    } else if (lastMove == 'drop') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 2) {
            document.getElementById("ballCount").style.color = "red";
        }
        dr--
        sessionStorage.setItem('cargoDropped', dr)
    } else if (lastMove == 'delbot') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 2) {
            document.getElementById("ballCount").style.color = "red";
        }
        db--
        sessionStorage.setItem('deliverCargo_bottom', db)
    } else if (lastMove == 'deltop') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 2) {
            document.getElementById("ballCount").style.color = "red";
        }
        dt--
        sessionStorage.setItem('deliverCargo_top', dt);
    } else if (lastMove == 'autoDel') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 2) {
            document.getElementById("ballCount").style.color = "red";
        }
        adc--;
        sessionStorage.setItem('AUTONOMOUS_Deliver', adc);
    } else if (lastMove == 'autoCross') {
        ch--
        sessionStorage.setItem('AUTONOMOUS_Cross', ch);
    } else if (lastMove == 'comClimb') {
        c--
        sessionStorage.setItem('climbComplete', c);
    }  else if (lastMove == 'attClimb') {
        c--
        sessionStorage.setItem('climbAttempt', c);
    }
    
     else if (lastMove == 'pinBot') {
        defenseCounter--
        document.getElementById("defenseCounter").innerHTML = defenseCounter;
        dp--
        sessionStorage.setItem('pinned_bot', dp);
    } else if (lastMove == 'pushBot') {
        defenseCounter--
        document.getElementById("defenseCounter").innerHTML = defenseCounter;
        dpu--
        sessionStorage.setItem('push_bot', dpu);
    } else if (lastMove == 'defDis') {
        defenseCounter--;
        document.getElementById("defenseCounter").innerHTML = defenseCounter;
        dd--;
        sessionStorage.setItem('disrupted_bot', dd)
    } else {
        alert('Error Undoing an action');
    }
    lastAction.innerHTML = 'Undone Action';
}