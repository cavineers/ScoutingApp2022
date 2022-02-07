const express = require("express");
const { google } = require("googleapis");

const app = express();

app.get("/", async (req, res) => {
    const auth = new google.authGoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version: "v4", auth: client});

    const spreadsheetId = "1g6l3HL99CTEtF8rvT7Dz0gAf6K2xr0S-awCIa1V1SbQ";

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    res.send(metaData);
});

app.listen(1337, (req, res) => console.log("running on 1337"));
