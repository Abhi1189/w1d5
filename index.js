var chalk = require("chalk");

var message = chalk.underline.bold.blue.bgWhite("Hello") + chalk.bgRed.yellow(" World") + chalk.bgYellow.red("!");
console.log(message);