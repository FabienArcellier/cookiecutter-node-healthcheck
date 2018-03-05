#!/usr/bin/env node
let Mocha = require('mocha');

function main() {
    var mocha = new Mocha();
    mocha.addFile(__dirname + '/{{cookiecutter.domain}}_healthcheck.js');
    mocha.run();
}

main();
