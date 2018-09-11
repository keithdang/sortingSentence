const util = require("./util");
function askQuestion() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(
    "Press 1 for sort by lower case priority (ex: ask, banana, Ask , Banana)\nPress 2 for sort by upper case priority (ex: Ask , Banana, ask, banana)\n",
    answer => {
      let bSuccess = false;
      try {
        if (answer !== "1" && answer !== "2") throw "Not 1 or 2";
        bSuccess = true;
      } catch (err) {
        console.log(err);
        rl.close();
        askQuestion();
      }
      if (bSuccess) {
        start(answer === "1");
      }
      rl.close();
    }
  );
}

function start(bLower) {
  var fs = require("fs");
  var text = fs.readFileSync("text.txt", "utf8");
  var textRmQuotes = text.replace(/['"]+/g, ""); //removes quotation marks
  var textRmQuotes = textRmQuotes.replace(/\n/g, ""); //removes \n
  var arrText = textRmQuotes.match(/[^\.!\?]+[\.!\?]+/g);
  let code;
  for (var j = 0; j < arrText.length; j++) {
    arrText[j] = arrText[j].trim();
    code = arrText[j].charCodeAt(0);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) //lower alpha
    ) {
      arrText[j] = util.removeNonAlpha(arrText[j]);
    }
  }
  var sorted = util.quickSort(arrText, 0, arrText.length - 1, bLower);
  util.printArray(sorted);
}

askQuestion();
