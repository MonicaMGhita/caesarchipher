function rot13(str) {
  let decodedRes = "";
  let azStart = "abcdefghijklm".toUpperCase();
  let azEnd = "nopqrstuvwxyz".toUpperCase();
for (let i =0; i < str.length; i+=1){
  let letterToDecode = str[i];

if (azStart.indexOf(letterToDecode)>=0){
decodedRes += azEnd[azStart.indexOf(letterToDecode)]
} else if (azEnd.indexOf(letterToDecode)>=0){
decodedRes += azStart[azEnd.indexOf(letterToDecode)]
} else {
  decodedRes += letterToDecode;
}
  //console.log(letterToDecode);

}
  //console.log(azStart);
  //console.log(azEnd);
  return decodedRes;
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
