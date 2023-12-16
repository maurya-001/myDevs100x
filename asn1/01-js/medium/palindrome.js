/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //  let n = str.length;
  //  str = str.toowerCase();
  //  for(let i = 0; i < n / 2 ; i++)
  //  {
  //   if(str[i] != str[n - i - 1])
  //   return false;

  //  }
  //  return true;
//   let str2 = str.toLowerCase();
//   let rev = str2.toLowerCase().split("").reverse().join("");
//   if(rev == str2)
//   return true;
// else return false;

  // Remove spaces and punctuation marks and convert to lowercase
  let cleanedStr = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").toLowerCase();
  let n = cleanedStr.length;

  for(let i = 0; i < n / 2 ; i++) {
     if(cleanedStr[i] != cleanedStr[n - i - 1])
        return false;
  }
  return true;
}



module.exports = isPalindrome;
