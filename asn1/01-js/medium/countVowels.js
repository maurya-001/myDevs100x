/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let n = str.length;
    let str_ = str.toLowerCase();
    let cnt = 0;
    for(let i = 0; i < n; i ++)
    {
      if(str_[i] == 'a' || str_[i] == 'e' ||str_[i] == 'i'||str_[i] == 'o'||str_[i] == 'u')
      cnt++;
    }
    return cnt;


}

module.exports = countVowels;