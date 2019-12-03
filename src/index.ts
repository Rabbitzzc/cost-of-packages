#! /usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
// 导入 path
import * as path from 'path';
import * as fs from "fs";
import * as yargs from 'yargs';

// yargs.usage('Usage: $0 <command> [options]')
//     .command('count', 'Count the lines in a file')
//     .example('$0 count -f foo.js', 'count the lines in the given file')
const argv = yargs.options({
    v: {
        type: 'boolean',
        alias: 'version',
        describe: 'check the version'
    },
    d: {
        type: 'boolean',
        default: false,
        describe: 'only print cost of dependence, without devDep...'
    },
    D: {
        type: 'boolean',
        default: false,
        describe: 'only print cost of devDependence'
    },
    s: {
        type: 'boolean',
        alias: 'sort',
        default: false,
        describe: 'sorting dependence'
    },
    c: {
        type: 'boolean',
        alias: 'chart', default: false,
        describe: 'charting dependence'
    },
    u: {
        type: 'boolean',
        default: false,
        describe: 'highlighting unused dependencies in your package.json'
    },
}).argv;

// 如果不存在package.json文件，则退出
if(!fs.existsSync('package.json')) {
    console.log('package.json not found!');
    console.log();
    process.exit();
}

// 计算 depend 函数，返回数组对象, [{name: '包名', size: '大小', dep: '安装依赖数量', devdep: '运行依赖数量'}] 

// 计算 devDepend 函数

// sort 函数 排序数组，数组对象的size排序


console.log(argv);
