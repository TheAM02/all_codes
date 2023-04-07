import Database from '@replit/database';
import express from 'express';
import http from 'http';
import fs from 'fs'
import * as socketio from 'socket.io';
import route from './Main/routing.js'
import main from './Main/src.js'
console.clear()


const app = express()
const server = http.createServer(app);
const io = new socketio.Server(server);
const db = new Database("https://kv.replit.com/v0/eyJhbGciOiJIUzUxMiIsImlzcyI6ImNvbm1hbiIsImtpZCI6InByb2Q6MSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb25tYW4iLCJleHAiOjE2NDcwOTI1MTAsImlhdCI6MTY0Njk4MDkxMCwiZGF0YWJhc2VfaWQiOiIwOGQyYWFhMC1jNmU4LTRjYzAtODkyNS03NDVkZTM1ZmUyM2IifQ.hhLV3kkYnxyBJQY9eZnE7SPwe-7UjqnHQjKHovwCnXidJkgGd6FaYtRtwW2Nh6NX2Ikb9GbTyMW4dKQeFlgCQg")

app.use(express.static('Public'))

route(app)

server.listen(3000, () => {
    console.log('App is live.')
})

io.on('connection', (socket) => {
    io.on('message', main.msgHandler)
})