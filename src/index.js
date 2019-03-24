module.exports = function check(str, bracketsConfig) {
  let l = str.length,
    char,
    last,
    stack = [];

  for (let i = 0; i < l; i++) {
    char = str[i];
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (char == bracketsConfig[j][0]) {
        stack.push(char);
      } else if (char == bracketsConfig[j][1]) {
        if (stack.length > 0) {
          last = stack[stack.length - 1];
          console.log("last is", last);
          console.log("char is", char);
          if (char == bracketsConfig[j][1] && last == bracketsConfig[j][0]) {
            stack.pop();
          }
        }
      }
    }
  }

  return stack.length == 0;
}

/* function isBalanced(str) {
  let checkString = str;
  let stack = [];

  // Если входная строка пуста, то технически всё сбалансировано
  if (checkString.length <= 0) return true;

  for (let i = 0; i < checkString.length; i++) {
    if (checkString[i] === '{') {
      stack.push(checkString[i]);
    } else if (checkString[i] === '}') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.pop()) return false;
  return console.log(true);
};
 */