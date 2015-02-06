var vm = require('vm');
vm.runInThisContext('1 + 1');

// vm should have a second parameter as the context.