function childpiper (inputStream, cmds, outputStream) {
  inputStream.pipe(cmds[0].stdin)
  for (var i = 0; i < cmds.length-1; i++) {
    cmds[i].stdout.pipe(cmds[i+1].stdin)
  }
  cmds[cmds.length-1].stdout.pipe(outputStream)
  return outputStream
}

module.exports = childpiper
