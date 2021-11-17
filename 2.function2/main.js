function palindrome(message){
  // wirte your code here
  var re = /[\W_]/g;
  var lowRegStr = message.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  console.log(reverseStr === lowRegStr)
  return reverseStr === lowRegStr;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
