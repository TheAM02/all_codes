import axios from "axios";

const clientId = process.env.reddit_app_id;
const clientSecret = process.env.reddit_app_secret;
const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');





async function getAccessToken() {
    try {
        // Set the authentication headers
        const headers = {
            'Authorization': `Basic ${authHeader}`,
            'User-Agent': 'application',
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        // Set the payload for the post request
        const payload = new URLSearchParams();
        payload.append('grant_type', 'password');
        payload.append('username', process.env.reddit_username);
        payload.append('password', process.env.reddit_password);

        // Send the post request to the Reddit API
        const response = await axios.post('https://www.reddit.com/api/v1/access_token', payload, { headers });

        return response.data.access_token
    } catch (error) {
        console.error(error);
    }
}

async function getFlairs(subreddit) {
    try {
        // Set the authentication headers
        const headers = {
            'Authorization': token,
            'User-Agent': 'axios'
        };

        // Send the get request to the Reddit API
        const response = await axios.get(`https://www.reddit.com/r/${subreddit}/api/link_flair`, { headers });

        console.log(response.data.json);
    } catch (error) {
        console.error(error);
    }
}

async function checkToken(token) {
    try {
        const response = await axios.get('https://www.reddit.com/api/v1/me', {
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
                'User-Agent': 'application'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getScopes() {
    try {
        const response = await axios.get('https://www.reddit.com/api/v1/scopes', {
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function submitPost(subreddit, title, text, token) {
    try {
        // Set the authentication headers

        const url = `https://oauth.reddit.com/api/submit`;
        const headers = {
            'Content-type': 'application/x-www-form-urlencoded',
            "Authorization": `bearer ${token}`,
            "User-Agent": "manage your reddit easily in the maxi time created in some idea of mine by u/_jaypatel"
        }

        // Set the payload for the post request
        const payload = new URLSearchParams();
        payload.append('api_type', 'json');
        payload.append('kind', 'self');
        payload.append('sr', subreddit);
        payload.append('title', title);
        payload.append('text', text);
        payload.append('extension', 'json')

        // Send the post request to the Reddit API
        const response = await axios.post(url, payload, { headers });

        console.log(response.data.json.errors);
    } catch (error) {
        console.error(error);
    }
}

async function login (token, username, password) {
    try {

        const url = `https://ssl.reddit.com/api/login?api_type=json&user=${username}&passwd=${password}&rem=true`
        const headers = {
            'User-Agent': 'Axios',
        }

        const payload = new URLSearchParams();
        payload.append('grant_type', 'password');
        payload.append('username', process.env.reddit_username);
        payload.append('password', process.env.reddit_password);

        const response = await axios.post(url, payload, {headers})

        return response.data.json.data;

    } catch (error) {
        console.error((error))
    }
}


const token = await getAccessToken();
const credentials = await login(token, process.env.reddit_username, process.env.reddit_password);
await submitPost('tlauncher', 'origins smp', 'join the origins smo', token);

