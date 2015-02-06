var cp = require('child_process');

var child = cp.spawn('cat', [], {customFds: [0, 1, 2]});

// 0 for stdin
// 1 for stdout
// 2 for stderr