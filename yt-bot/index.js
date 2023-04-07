const express = require('express');
const fs = require('fs')
const app = express();

const {google} = require('googleapis')

const OAuth2Data = require('./credentials.json');

let authed


const videoData = {
    title: 'Call of Duty: Mobile Pro Moment 🤯😱😈',
    description: '#codm #callofdutymobile #callofduty',
    tags: [
        'callofduty', 'callofdutymobile', 'codm'
    ]
}

const scopes = 'https://www.googleapis.com/auth/youtube.upload'

const client = new google.auth.OAuth2(
    OAuth2Data.web.client_id,
    OAuth2Data.web.client_secret,
    OAuth2Data.web.redirect_uris[0]
)

const youtube = google.youtube({
    version: 'v3',
    auth: client
})

const url = client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
});
console.log(url);

function upload () {
    youtube.videos.insert({
        resource: {
            snippet: videoData,
            status: {
                privacyStatus: 'unlisted'
            }
        },
        media: {
            body: fs.createReadStream('./short_video.mp4')
        },
        part: 'snippet,status'
    })
}

app.get('/callback', (req, res) => {
    client.getToken(req.query.code, function (err, tokens) {
        if (err) {
            console.log("Error authenticating");
            console.log(err);
        } else {
            console.log("Successfully authenticated");
            console.log(tokens);
            client.setCredentials(tokens);

            authed = true;
            res.redirect("/");
        }
    });
});

app.get('/', (req, res) => {
    const oauth2 = google.oauth2({
        auth: client,
        version: 'v2'
    });
    res.send('ok')
})

app.get('/upload', (req, res) => {
    res.send('Under dev. Available soon.');
    const youtube = google.youtube({ version: "v3", auth: client});
    upload()
})

app.listen('8080');