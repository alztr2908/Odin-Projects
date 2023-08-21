function fizzBuzz(n) {
  res = "";

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) res += "Fizz";
    if (i % 3 == 0) res += "Buzz";

    if (res == "") {
      console.log(i);
    } else {
      console.log(res);
    }

    res = "";
  }
}

// console.log(0 % 3 == 0);

// fizzBuzz(3);
// fizzBuzz(5);
fizzBuzz(15);
