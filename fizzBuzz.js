function fizzBuzz(n) {
  res = "";
  if (n % 3 == 0) res += "Fizz";
  if (n % 5 == 0) res += "Buzz";

  return res;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
