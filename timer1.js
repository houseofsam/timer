const args = process.argv.slice(2).sort((a, b) => a - b);
const digitsOnly = new RegExp(/\d/);

// args inputs are strings so convert to numbers & filter out non-numbers.
const numArr = args
  .map(item => {
    return item = Number(item);
  })
  .filter(
    item => digitsOnly.test(item)
  );

// iterate through each array item/number
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] < 0) {
    // If an array item (input) is a negative number, ignore & skip. Break out of current iteration via continue
    continue;
  } else {
    // If an array item is a valid number, send an alert at that specified number in seconds after function is called.
    setTimeout(() => {
      process.stdout.write(`beep @ ${numArr[i]} seconds!   `);
    }, numArr[i]*1000);
  }
}

// print new line 1 second after the last alert is made
setTimeout(() => process.stdout.write('\n'), (numArr[numArr.length-1]*1000 + 1000));