module.exports = function check(str, bracketsConfig) {
  let l = str.length,
    char,
    last,
    /* flag = 0, */
    stack = [];

  for (let i = 0; i < l; i++) {
    char = str[i];
    for (let j = 0; j < bracketsConfig.length; j++) {
      /*       if(char == '|' || char == '7' || char == '8'){
              flag = 1;
              stack.push(char);
            } */
      if (char == bracketsConfig[j][0] /* && flag == 0 */ ) {
        stack.push(char);
      } else if (char == bracketsConfig[j][1]) {
        if (stack.length > 0) {
          if (stack[stack.length - 1] == bracketsConfig[j][0]) {
            stack.pop();
            /* flag = 0; */
          }
        } else {
          console.log('Char',char);
          stack.push(char);
        }
      }
    }
    if (stack.reduce((a, b) => (a[b] = a[b] + 1 || 1) && a, {})['|'] % 2 == 0) {
      let index = 0;
      while (index !== -1) {
        index = stack.indexOf('|');
        if(index !== -1) stack.splice(index, 1);
      }
    }
    if (stack.reduce((a, b) => (a[b] = a[b] + 1 || 1) && a, {})['7'] % 2 == 0) {
      let index = 0;
      while (index !== -1) {
        index = stack.indexOf('7');
        if(index !== -1) stack.splice(index, 1);
      }
    }
    if (stack.reduce((a, b) => (a[b] = a[b] + 1 || 1) && a, {})['8'] % 2 == 0) {
      let index = 0;
      while (index !== -1) {
        index = stack.indexOf('8');
        if(index !== -1) stack.splice(index, 1);
      }
    }
  }

  if (0) {

  }
  return stack.length == 0;
}
