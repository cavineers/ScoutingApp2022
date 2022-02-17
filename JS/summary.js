var teamNumber = sessionStorage.getItem('team_key');
var matchNum = sessionStorage.getItem('match_key');
var startingCells = sessionStorage.getItem('PowerCell_start');

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
    let climbWell = 'NO';
    if (document.getElementById('checkboxClimb').checked == true) {
        climbWell = "YES";
    }
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
    sessionStorage.setItem('Sum-adjust', climbWell);
    sessionStorage.setItem('Sum-SafetyCom', safetyComments);
    sessionStorage.setItem('Sum-Fall', Fall);
    sessionStorage.setItem('Sum-Disabled', checkboxDisabled);
    sessionStorage.setItem('Sum-Trip', checkboxTrip);
    sessionStorage.setItem('Sum_Foul', checkboxFoul);
    var pickup_cell = sessionStorage.getItem('pickup_cell');
    var deliverCell_level1 = sessionStorage.getItem('deliverCell_level1');
    var deliverCell_level2 = sessionStorage.getItem('deliverCell_level2');
    var deliverCell_level3 = sessionStorage.getItem('deliverCell_level3');
    var climbComplete = sessionStorage.getItem('climbComplete');
    var climbAttempt = sessionStorage.getItem('climbAttempt');
    var didNotClimb = sessionStorage.getItem('didNotClimb');
    var pinned_bot = sessionStorage.getItem('pinned_bot');
    var disrupted_bot = sessionStorage.getItem('disrupted_bot');
    var spunControl = sessionStorage.getItem('spunControl_3-5times');
    var push_bot = sessionStorage.getItem('push_bot');
    var spunControl_less_than_3times = sessionStorage.getItem('spunControl_less_than_3times');
    var spunControl_more_than_5times = sessionStorage.getItem('spunControl_more_than_5times');
    var LandedOnNeededColor = sessionStorage.getItem('LandedOnNeededColor');
    var MissedWheelColor = sessionStorage.getItem('MissedWheelColor');
    let missedCells = sessionStorage.getItem('missedPowerCell');
    let Scouter_name = sessionStorage.getItem('Scouter_name');
    let stage3_control = 'missedColor'
    let stage2_control = 'spun_less_than_3_times'
    let climbVal = 'NO';
    if (climbComplete >= 1) {
        climbVal = 'YES'
    } else if (didNotClimb >= 1) {
        climbVal = 'NO'
    } else {
        climbVal = 'attempted_climb'
    }
    if (spunControl == 1) {
        stage2_control = 'Spun_less_than_3times';
    } else if (spunControl_less_than_3times == 1) {
        stage2_control = 'Spun_3-5_times';
    } else if (spunControl_more_than_5times == 1) {
        stage2_control = 'Spun_more_than_5times';
    } else {
        stage2_control = "Did not spin"
    }
    if (LandedOnNeededColor == 1) {
        stage3_control = 'LandedOnColor';
    } else if (MissedWheelColor == 1) {
        stage3_control = 'MissedColor'
    } else {
        stage3_control = 'Did not spin'
    }
    let com = sessionStorage.getItem('Sum-Comments');
    let deCom = sessionStorage.getItem('Sum-DefComs');
    let WellClimb = sessionStorage.getItem('Sum-adjust');
    let safe = sessionStorage.getItem('Sum-SafetyCom');
    let fall = sessionStorage.getItem('Sum-Fall');
    let disabled = sessionStorage.getItem('Sum-Disabled');
    let trip = sessionStorage.getItem('Sum-Trip');
    let foul = sessionStorage.getItem('Sum_Foul');
    let autoDel = sessionStorage.getItem('AUTONOMOUS_Deliver');
    var obj = [
        `{ "teamNum": "${teamNumber}", "matchNum": ${matchNum}, "startingCells": ${startingCells}, "metrics": {"numberOfPickups": ${pickup_cell},"deliveriesLvl1": ${deliverCell_level1},"deliveriesLvl2": ${deliverCell_level2},"deliveriesLvl3": ${deliverCell_level3},"missedPowerCell": ${missedCells},"climb": "${climbVal}","numPins": ${pinned_bot},"numPush": ${push_bot},"numDisrupted": ${disrupted_bot},"stage2_control": "${stage2_control}","stage3_control": "${stage3_control}"},"SummaryData": {"Comments": "${com}","DefenseComments": "${deCom}","SafetyComments": "${safe}","RobotFall": "${fall}","RobotDisabled": "${disabled}","RobotTrip": "${trip}","AdjustOnBar": "${WellClimb}","GetFoul": "${foul}"},"Autonomous_Metrics": {"num_deliverCell": ${autoDel},"crossLine": "${crossLineVal}"}, "Scouter_name": "${Scouter_name}"}\n`
    ];
    download(`${matchNum}_${teamNumber}.txt`, obj);
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