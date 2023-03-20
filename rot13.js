function rot13(str) {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let decodedStr = ''
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) {
        if (alphabets.indexOf(str[i]) >= 0) {
          console.log()
          if (alphabets.indexOf(str[i]) >= 13) {
            decodedStr += alphabets[alphabets.indexOf(str[i]) - 13]
          } else {
            decodedStr += alphabets[alphabets.indexOf(str[i]) + 13]
          }
        }
      } else {
        decodedStr += str[i]
      }
    }
    return decodedStr;
  }
  
  rot13("SERR CVMMN!");