var teamNumber = sessionStorage.getItem('team_key');
var matchNum = sessionStorage.getItem('match_key');
var startingCargo = sessionStorage.getItem('Cargo_start');

function preLoad(stringMetrics) {
    let commentBox = document.getElementById('commentBox').value;
    document.getElementById('commentBox').value = commentBox + " " + stringMetrics;
}

function preLoadSafety(stringMetrics) {
    let safetyBox = document.getElementById('safetyComments').value;
    document.getElementById('safetyComments').value = safetyBox + " " + stringMetrics;
}

function submit() {
    let comments = document.getElementById('commentBox').value;
    comments = comments.replace(
        new RegExp("\\n", "g"),
        " "
    );
    let defenseCom = document.getElementById('defenseComments').value;
    defenseCom = defenseCom.replace(
        new RegExp("\\n", "g"),
        " "
    )
    let safetyComments = document.getElementById('safetyComments').value;
    safetyComments = safetyComments.replace(
        new RegExp("\\n", "g"),
        " "
    )
    let Fall = "NO";
    if (document.getElementById('checkboxFall').checked) {
        Fall = "YES";
    }
    let checkboxDisabled = "NO";
    if (document.getElementById('checkboxDisabled').checked == true) {
        checkboxDisabled = "YES";
    }
    let checkboxTrip = "NO";
    if (document.getElementById('checkboxTrip').checked == true) {
        checkboxTrip = "YES";
    }
    let checkboxFoul = "NO";
    if (document.getElementById('checkboxFoul').checked == true) {
        checkboxFoul = "YES";
    }
    let crossLine = sessionStorage.getItem('AUTONOMOUS_Cross');
    let crossLineVal = "NO";
    if (crossLine == 1) {
        crossLineVal = "YES";
    }
    sessionStorage.setItem('Sum-Comments', comments);
    sessionStorage.setItem('Sum-DefComs', defenseCom);
    sessionStorage.setItem('Sum-SafetyCom', safetyComments);
    sessionStorage.setItem('Sum-Fall', Fall);
    sessionStorage.setItem('Sum-Disabled', checkboxDisabled);
    sessionStorage.setItem('Sum-Trip', checkboxTrip);
    sessionStorage.setItem('Sum_Foul', checkboxFoul);
    var pickup_cargo = sessionStorage.getItem('pickup_cargo');
    var cargoDropped = sessionStorage.getItem('cargoDropped');
    var deliverCargo_bottom = sessionStorage.getItem('deliverCargo_bottom');
    var deliverCargo_top = sessionStorage.getItem('deliverCargo_top');
    var climbL1 = sessionStorage.getItem('climbL1');
    var climbL2 = sessionStorage.getItem('climbL2');
    var climbL3 = sessionStorage.getItem('climbL3');
    var climbL4 = sessionStorage.getItem('climbL4');
    var didNotClimb = sessionStorage.getItem('didNotClimb');
    var pinned_bot = sessionStorage.getItem('pinned_bot');
    var disrupted_bot = sessionStorage.getItem('disrupted_bot');
    var push_bot = sessionStorage.getItem('push_bot');
    let missedCargo = sessionStorage.getItem('missedCargo');
    let Scouter_name = sessionStorage.getItem('Scouter_name');
    let climbLev = '';
    if (climbL1 >= 1) {
        climbLev = 'Level 1'
    } else if (didNotClimb >= 1) {
        climbLev = 'Did not climb'
    } else {
        climbLev = 'Fell Off'
    }

    if (climbL2 >= 1) {
        climbLev = 'Level 2'
    } else if (didNotClimb >= 1) {
        climbLev = 'Did not climb'
    } else {
        climbLev = 'Fell Off'
    }

    if (climbL3 >= 1) {
        climbLev = 'Level 3'
    } else if (didNotClimb >= 1) {
        climbLev = 'Did not climb'
    } else {
        climbLev = 'Fell Off'
    }

    if (climbL4 >= 1) {
        climbLev = 'Level 4'
    } else if (didNotClimb >= 1) {
        climbLev = 'Did not climb'
    } else {
        climbLev = 'Fell Off'
    }

    let com = sessionStorage.getItem('Sum-Comments');
    let deCom = sessionStorage.getItem('Sum-DefComs');
    let safe = sessionStorage.getItem('Sum-SafetyCom');
    let fall = sessionStorage.getItem('Sum-Fall');
    let disabled = sessionStorage.getItem('Sum-Disabled');
    let trip = sessionStorage.getItem('Sum-Trip');
    let foul = sessionStorage.getItem('Sum_Foul');
    let autoDel = sessionStorage.getItem('AUTONOMOUS_Deliver');
    var obj = [
        `${teamNumber},${matchNum},${startingCargo},${pickup_cargo},${cargoDropped},${deliverCargo_bottom},${deliverCargo_top},${missedCargo},${climbLev},${pinned_bot},${push_bot},${disrupted_bot},${com},${deCom},${safe},${fall},${disabled},${trip},${foul},${autoDel},${crossLineVal},${Scouter_name}
`];
    download(`${matchNum}_${teamNumber}.csv`, obj);
    sessionStorage.clear();
    alert('Data successfully logged! Please Refresh the app.');
    window.location.replace('index.html');
}

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

function Summary(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontenT = document.getElementsByClassName("tabcontenT");
    for (i = 0; i < tabcontenT.length; i++) {
        tabcontenT[i].style.display = "none";
    }


    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
