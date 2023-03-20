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

  //SOLUTION using charCodeAt() & String.fromCharCode()

  function rot13(str) {
    let decodedStr = ''
    for (let i = 0; i < str.length; i++) {
      let asciiNum = str[i].charCodeAt()
      if(asciiNum >= 65 && asciiNum <= 77){
        decodedStr += String.fromCharCode(asciiNum + 13)
      }else if(asciiNum >= 78 && asciiNum <= 90){
        decodedStr += String.fromCharCode(asciiNum - 13)
      }else{
        decodedStr += str[i]
      }
    }
    console.log(decodedStr)
    return decodedStr;
  }
  
  rot13("SERR CVMMN!");