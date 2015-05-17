/**
 * headless.js
 * Created by dcorns on 5/14/15.
 */
'use strict';
var htmlStr = '<body><h1>Atomus</h1></body>';
var atomus = require('atomus');
var browser = atomus().html(htmlStr).ready(function(errors, window) {

});