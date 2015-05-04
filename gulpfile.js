var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true }); // Require all tasks in gulp/tasks, including subfolders
