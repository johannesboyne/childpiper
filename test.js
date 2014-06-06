var spawn = require('child_process').spawn,
through = require('through'),
fs = require('fs'),
piper = require('./index.js'),
assert = require('assert')

var myStream = through(function write(data) {
  this.emit('data', data)
})

piper(fs.createReadStream('test.txt'), [
  spawn('tr', ['[:lower:]', '[:upper:]']),
  spawn('awk', ['{print $1}']),
  spawn('sed', ['s/O/o/'])
], myStream).pipe(process.stdout)

myStream.on('data', function (data) {
  assert.equal(data.toString().length, 14) 
})
