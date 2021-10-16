/*
These import statements don't work inside a repl
import fs from 'fs-extra'
import path from 'path'
import pkgDir from 'pkg-dir'
import yaml from 'js-yaml'
*/
const fs = require('fs-extra');
const path = require('path');
const pkgDir = require('pkg-dir');
const yaml = require('js-yaml');
const { resolve } = require('path');

console.log(pkgDir.sync() + ' is the package directory')

const data = {
    ex1: resolve('data/data.yaml'),
    ex2: resolve("data/ymlExample.yml"),
    ex3: resolve("data/ymlExample.json")
}

// console.table(data)
