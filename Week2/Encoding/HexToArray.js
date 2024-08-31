


function convertHexToArray(Hexdata){
    const byteArray = new Uint8Array(Hexdata.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(Hexdata.substr(i * 2, 2), 16);
  }
  return byteArray;

}


const hexString = "48656c6c6f";
const arrayString = convertHexToArray(hexString);
console.log(arrayString);