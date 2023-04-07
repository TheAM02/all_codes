import snoowrap from 'snoowrap'
import express from 'express'

const app = express()
const port = 8000 || process.env.PORT;
const username = process.env.reddit_username;
const password = process.env.reddit_password;
const app_id = process.env.reddit_app_id;
const app_secret = process.env.reddit_app_secret;
const subs = [
    // {name: 'TLAUNCHER', flair: 'server'},
    'smp',
    // 'crackedsmp',
    // 'originsmptesting',
]
const title = 'Origin Network [SMP] [Vanilla] [Cracked] {1.18.1}'
const text = `

Welcome to the Origin Network. We are a new SMP with some active members and are looking for more!
We have vanilla Minecraft with some plug-ins that don't affect the fun survival gameplay.
The server is very friendly and very positive and the staff is very cool too.
We are open to feedback and more event ideas.
The Origin Network of servers is also looking for more moderators.
We hope you will have fun with us and enjoy what we have to offer!

We have: 
- Survival
- Anarchy
- Creative
- Events

and much more.

To join, just join our server. The invite is: https://discord.gg/WrTfpt93Cg


We look forward to seeing you on our server soon!

`


app.get('/', (req, res) => {
    res.send("App is up!")
});

app.get('/post', async (req, res) => {
    try {

        subs.forEach((sub, i) => {
            setTimeout(() => {
                postLink(title, text, sub)
                console.log(`Successfully posted to sub ${sub} at ${Date()}.`)
            }, (i*2*1000))
        })

    } catch (err) {

        return res.sendStatus(500);

    } finally {

      res.send('Started posting!')

    }
})


function postLink(title, text, subreddit) {
    const r = new snoowrap({
        userAgent: 'origin smp advertisement bot by u/TheAM01',
        clientId: app_id,
        clientSecret: app_secret,
        username: username,
        password: password,
    })
    r.getSubreddit(subreddit).submitSelfpost({
        title: title,
        text: text,
        sendReplies: true,
        flairText: subreddit.flair
    })
}

async function idunno() {
    await subs.forEach((sub, i) => {
        setTimeout(() => {
            console.log(Date())
        }, (i * 5 * 1000))
    })

    console.log('done')
}


app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})