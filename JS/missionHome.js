let g = 0;
let s = 1;
let sl = 1;
let sm = 1;
let d1 = 0;
let d2 = 0;
let d3 = 0;
let c = 0;
let dp = 0;
let dd = 0;
let dpu = 0;
let wc = 1;
let wcn = 1;
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
    if (ballCount <= 5) {
        document.getElementById("ballCount").style.color = 'white';
    }
    mi++
    sessionStorage.setItem('missedCargo', mi);
    lastAction.innerHTML = 'Missed Shot';
    sessionStorage.setItem('lastAction', 'missed');
}

function setLocalDeliver1() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 5) {
        document.getElementById("ballCount").style.color = 'white';
    }
    d1++
    sessionStorage.setItem('delivercar_level1', d1)
    lastAction.innerHTML = 'Deliver to lvl 1';
    sessionStorage.setItem('lastAction', 'del1');
}

function setLocalDeliver2() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 5) {
        document.getElementById("ballCount").style.color = 'white';
    }
    d2++
    sessionStorage.setItem('delivercargo_level2', d2)
    lastAction.innerHTML = 'Deliver to outer port';
    sessionStorage.setItem('lastAction', 'del2');
}

function setLocalDeliver3() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 5) {
        document.getElementById("ballCount").style.color = 'white';
    }
    d3++
    sessionStorage.setItem('deliverCargo_level3', d3)
    lastAction.innerHTML = 'Deliver to inner port';
    sessionStorage.setItem('lastAction', 'del3');
}

function delAutoCargo() {
    ballCount -= 1;
    document.getElementById("ballCount").innerHTML = ballCount;
    ballCount2 -= 1;
    document.getElementById("ballCount2").innerHTML = ballCount2;
    if (ballCount <= 5) {
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

function setLocalClimbCom() {
    c++
    sessionStorage.setItem('climbComplete', c)
    climbModal.style.display = "none";
    lastAction.innerHTML = 'Complete Climb';
    sessionStorage.setItem('lastAction', 'comClimb');
}

function setLocalClimbAtt() {
    c++
    sessionStorage.setItem('climbAttempt', c)
    climbModal.style.display = "none";
    lastAction.innerHTML = 'Attempt Climb';
    sessionStorage.setItem('lastAction', 'attClimb');
}

function setLocalClimbNot() {
    c++
    sessionStorage.setItem('didNotClimb', c)
    climbModal.style.display = "none";
    lastAction.innerHTML = "Didn't Climb";
    sessionStorage.setItem('lastAction', 'donClimb');
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

function spinCont() {
    sessionStorage.setItem('spunControl_3-5times', s)
    control.style.display = 'none';
    lastAction.innerHTML = 'Spun less than 3 times';
    sessionStorage.setItem('lastAction', 'spin3-5');
}

function spinContLess() {
    sessionStorage.setItem('spunControl_less_than_3times', sl)
    control.style.display = 'none';
    lastAction.innerHTML = 'Spun 3-5 times';
    sessionStorage.setItem('lastAction', 'spin3');
}

function spinContMore() {
    sessionStorage.setItem('spunControl_more_than_5times', sm)
    control.style.display = 'none';
    lastAction.innerHTML = 'Spun more than 5';
    sessionStorage.setItem('lastAction', 'spin5');
}

function wheelColor() {
    sessionStorage.setItem('LandedOnNeededColor', wc)
    control.style.display = 'none';
    lastAction.innerHTML = 'Landed on Color';
    sessionStorage.setItem('lastAction', 'spinColor');
}

function wheelColorNot() {
    sessionStorage.setItem('MissedWheelColor', wcn)
    control.style.display = 'none';
    lastAction.innerHTML = 'Missed Color';
    sessionStorage.setItem('lastAction', 'spinNo');
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

var control = document.getElementById('control');
document.getElementById("Control").onclick = function() {
    control.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == climbModal) {
        climbModal.style.display = "none";
    } else if (event.target == defenseModal) {
        defenseModal.style.display = "none";
    } else if (event.target == control) {
        control.style.display = 'none';
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
        if (ballCount <= 5) {
            document.getElementById("ballCount").style.color = 'white';
        }
        g--
        sessionStorage.setItem('pickup_cargo', g);
    } else if (lastMove == 'missed') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 5) {
            document.getElementById("ballCount").style.color = "red";
        }
        mi--
        sessionStorage.setItem('missedCargo', mi);
    } else if (lastMove == 'del1') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 5) {
            document.getElementById("ballCount").style.color = "red";
        }
        d1--
        sessionStorage.setItem('deliverCargo_level1', d1)
    } else if (lastMove == 'del2') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 5) {
            document.getElementById("ballCount").style.color = "red";
        }
        d2--
        sessionStorage.setItem('deliverCargo_level2', d2)
    } else if (lastMove == 'del3') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 5) {
            document.getElementById("ballCount").style.color = "red";
        }
        d3--
        sessionStorage.setItem('deliverCargo_level3', d3);
    } else if (lastMove == 'autoDel') {
        ballCount += 1;
        document.getElementById("ballCount").innerHTML = ballCount;

        ballCount2 += 1;
        document.getElementById("ballCount2").innerHTML = ballCount2;
        if (ballCount == 5) {
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
    } else if (lastMove == 'attClimb') {
        c--
        sessionStorage.setItem('climbAttempt', c);
    } else if (lastMove == 'donClimb') {
        c--
        sessionStorage.setItem('didNotClimb', c);
    } else if (lastMove == 'pinBot') {
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
    } else if (lastMove == 'spin3-5') {
        s--
        sessionStorage.setItem('spunControl_3-5times', s)
    } else if (lastMove == 'spin3') {
        sl--
        sessionStorage.setItem('spunControl_less_than_3times', sl)
    } else if (lastMove == 'spin5') {
        sm--
        sessionStorage.setItem('spunControl_more_than_5times', sm)
    } else if (lastMove == 'spinColor') {
        wc--
        sessionStorage.setItem('LandedOnNeededColor', wc)
    } else if (lastMove == 'spinNo') {
        wcn--
        sessionStorage.setItem('MissedWheelColor', wcn)
    } else {
        alert('Error Undoing an action');
    }
    lastAction.innerHTML = 'Undone Action';
}