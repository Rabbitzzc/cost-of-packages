#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var yargs = require("yargs");
// yargs.usage('Usage: $0 <command> [options]')
//     .command('count', 'Count the lines in a file')
//     .example('$0 count -f foo.js', 'count the lines in the given file')
var argv = yargs.options({
    v: {
        type: 'boolean',
        alias: 'version',
        describe: 'check the version'
    },
    d: {
        type: 'boolean',
        "default": false,
        describe: 'only print cost of dependence, without devDep...'
    },
    D: {
        type: 'boolean',
        "default": false,
        describe: 'only print cost of devDependence'
    },
    s: {
        type: 'boolean',
        alias: 'sort',
        "default": false,
        describe: 'sorting dependence'
    },
    c: {
        type: 'boolean',
        alias: 'chart', "default": false,
        describe: 'charting dependence'
    },
    u: {
        type: 'boolean',
        "default": false,
        describe: 'highlighting unused dependencies in your package.json'
    }
}).argv;
console.log(argv);
