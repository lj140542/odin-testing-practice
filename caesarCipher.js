const CaesarCipher = (value, factor) => {
  let ret = '';
  for (let i = 0; i < value.length; i++) {
    let charValue = value.charCodeAt(i) + factor;

    if ((/[a-z]/.test(value[i]) && charValue > 122) || (/[A-Z]/.test(value[i]) && charValue > 90)) {
      charValue -= 26;
    }
    else if (!/[a-z]/.test(value[i]) && !/[A-Z]/.test(value[i])) {
      charValue = value.charCodeAt(i);
    }

    ret += String.fromCharCode(charValue);;
  }
  return ret;
}

export { CaesarCipher }