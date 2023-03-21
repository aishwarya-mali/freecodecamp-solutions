function telephoneCheck(str) {
  const regex = /^1?\s?(\d{3}|\(\d{3}\))(-|\s)?\d{3}(-|\s)?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("1 555)555-5555");
telephoneCheck("555-555-5555");

//use https://regex101.com/ to test