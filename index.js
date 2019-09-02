// import express from 'express';  ES2015 Module
const express = require('express');

const server = express();

// no code for handling http GET requests to the / URL
server.get('/', (req, res) => {
  res.send('hello world')
})

const port = 8000;
server.listen(port, () => console.log('api running'));