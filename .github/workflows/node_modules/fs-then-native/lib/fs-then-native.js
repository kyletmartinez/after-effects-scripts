'use strict'
const fs = require('fs')
const fsThen = Object.assign({}, fs)

function getArgs (args, resolve, reject) {
  const output = Array.from(args)
  output.push(err => {
    if (err) reject(err)
    else resolve()
  })
  return output
}

function getArgsData (args, resolve, reject) {
  const output = Array.from(args)
  output.push((err, data) => {
    if (err) reject(err)
    else resolve(data)
  })
  return output
}

fsThen.writeFile = function () {
  let args = Array.from(arguments)
  return new Promise((resolve, reject) => {
    args = getArgs(args, resolve, reject)
    fs.writeFile.apply(fs, args)
  })
}

fsThen.readFile = function () {
  let args = Array.from(arguments)
  return new Promise((resolve, reject) => {
    args = getArgsData(args, resolve, reject)
    fs.readFile.apply(fs, args)
  })
}

fsThen.readdir = function () {
  let args = Array.from(arguments)
  return new Promise((resolve, reject) => {
    args = getArgsData(args, resolve, reject)
    fs.readdir.apply(fs, args)
  })
}

fsThen.rmdir = function () {
  let args = Array.from(arguments)
  return new Promise((resolve, reject) => {
    args = getArgs(args, resolve, reject)
    fs.rmdir.apply(fs, args)
  })
}

fsThen.mkdir = function () {
  let args = Array.from(arguments)
  return new Promise((resolve, reject) => {
    args = getArgs(args, resolve, reject)
    fs.mkdir.apply(fs, args)
  })
}

fsThen.unlink = function () {
  let args = Array.from(arguments)
  return new Promise((resolve, reject) => {
    args = getArgs(args, resolve, reject)
    fs.unlink.apply(fs, args)
  })
}

module.exports = fsThen
