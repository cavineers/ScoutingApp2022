let X_TBA_Auth_Key;
let url;
let url_path;
let JSONObjectsTBA;
url_path = 'team/frc/4541';
X_TBA_Auth_Key = 'Yr1PG9BafkWX7xGsQpITSDOLOeqZWzBExSV9QnAsQJUtRKqVUYJKyVRfKRa6LCDn',
    url = ('https://www.thebluealliance.com/api/v3/event/2022dc305/matches/simple');
var headers = {
    'X-TBA-Auth-Key': 'Yr1PG9BafkWX7xGsQpITSDOLOeqZWzBExSV9QnAsQJUtRKqVUYJKyVRfKRa6LCDn'
};
var url_options = {
    'headers': headers,
};
fetch(url, url_options)
    .then((response) => {
    return response.json();
})
    .then((myJson) => {
    if (navigator.onLine == true) {
        localStorage.clear();
        JSONObjectsTBA = myJson.forEach(data => {
            if (data.comp_level.includes('qm')) {
                localStorage.setItem(`TBAdata${data.match_number}`, data.alliances.blue.team_keys + "," + data.alliances.red.team_keys);
            }
            else if (data.comp_level.includes('qf')) {
                localStorage.setItem(`TBAdataQF${data.match_number}`, data.alliances.blue.team_keys + "," + data.alliances.red.team_keys);
            }
        });
    }
});
//# sourceMappingURL=getTBA.js.map