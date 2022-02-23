document.getElementById('leaveMain').addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let type = document.getElementById('role').value;
    if (name != "") {
        if (type == 'Pit_Scouting') {
            window.location.replace('/pitScouting.html');
        } else {
            window.location.replace('main.html');
        }
    } else {
        alert('No Name Selected');
    }
});

function checkWifi() {
    let connection = navigator.onLine;
    let divType = document.getElementById('connectionColor');
    if (connection == true) {
        divType.style.background = 'green';
    } else {
        divType.style.background = 'red';
    }
}