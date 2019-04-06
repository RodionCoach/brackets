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
          stack.push(char);
        }
      }
    }
    if (stack.reduce((a, b) => (a[b] = a[b] + 1 || 1) && a, {})['|'] % 2 === 0) {
      let index;
      index = stack.lastIndexOf('|') - 1;
      if(!(stack[index] == '(' || stack[index] == '[' || stack[index] == '{')){
        index = 0;
        while (index !== -1) {
          index = stack.indexOf('|');
          if(index !== -1) stack.splice(index, 1);
        }
      }else{
        return false;
      }
    }
    if (stack.reduce((a, b) => (a[b] = a[b] + 1 || 1) && a, {})['7'] % 2 === 0) {
      let index;
      index = stack.lastIndexOf('7') - 1;
      if(!(stack[index] == '8')){
        index = 0;
        while (index !== -1) {
          index = stack.indexOf('7');
          if(index !== -1) stack.splice(index, 1);
        }
      }else{
        return false;
      }
    }
    if (stack.reduce((a, b) => (a[b] = a[b] + 1 || 1) && a, {})['8'] % 2 === 0) {
      let index;
      index = stack.lastIndexOf('8') - 1;
      if(!(stack[index] == '7')){
        index = 0;
        while (index !== -1) {
          index = stack.indexOf('8');
          if(index !== -1) stack.splice(index, 1);
        }
      }else{
        return false;
      }
    }
  }

  return stack.length == 0;
}
