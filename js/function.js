
const isPalindrom = function (string) {
  for (let i = 0; i <= string.length; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return 'Не палиндром';
    }
  }
  return 'Палиндром';
};


console.log(isPalindrom('каюк'));
