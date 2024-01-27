#!/usr/bin/env node
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '.env')});
const app = require('./src/app')


app.start();

