function convertToRoman(num) {
    if (!(typeof num === 'number' && num > 0 && num <= 3999)) {
      return 'Please enter positive number which is less than 3999'
    }
  
    const romanToNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    
    let romanNum = ''
    for (const key in romanToNum) {
      while (num >= romanToNum[key]) {
        romanNum += key
        num -= romanToNum[key]
      }
    }
    
    return romanNum;
  }
  
  convertToRoman(16);