function palindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '')

    // using FOR loop
    // const reversedStr = []
    // for (let i = formattedStr.length - 1; i >= 0; i--) {
    //   reversedStr.push(formattedStr[i])
    // }
    // const joinReversedStr = reversedStr.join('')
    // return formattedStr === joinReversedStr;

    //using reverse()
    const reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr;
}

palindrome("_eye");