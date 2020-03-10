const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname,'true-sass-tests/sass-tests.scss');
sassTrue.runSass({file:sassFile});