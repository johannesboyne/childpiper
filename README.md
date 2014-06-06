#childp|per

```

[input-stream] --> [child_process1, ..., child_processN] --> [output-stream]

```

Thats what p|per is for.

```javascript
childpiper(
  inputStream, 
  [
    spawn('tr', ['[:lower:]', '[:upper:]']),
    spawn('awk', ['{print $1}']),
    spawn('sed', ['s/O/o/'])
  ],
  outputStream
).pipe(someOtherStream)
```

Minimal implementation, probably just for a small amount of use-cases!
