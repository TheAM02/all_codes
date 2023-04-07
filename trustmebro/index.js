import express from "express";
import path from 'path';
import fs from 'fs';


import createRoutes from "./server/routes.js";


const port = process.env.port || 4001;
const app = express();
const dir = path.resolve();

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})


async function writeDummyPosts () {

    let data = {
        author: 'goofy ahh author',
        authorLink: '/users/goofy_ahh_author',
        image: 'https://i.kym-cdn.com/photos/images/facebook/001/457/778/74c.jpg',
        text: `Lorem ipsum dolor sit amet. This post is about stuff!! Look at picture of Mr. Bruh!!!1!1!`,
    }
    // return console.log(JSON.stringify(data))
    for (let i=0; i<5; i++) {
        fs.writeFileSync(`./public/posts/dummy-post-${i}.txt`, JSON.stringify(data))
    }

}

// writeDummyPosts()
createRoutes(app, dir)