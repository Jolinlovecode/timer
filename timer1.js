
let num;
  setTimeout(() => {
    if (num > 0) {
      process.stdout.write('\x07');
    }
    }, num);
