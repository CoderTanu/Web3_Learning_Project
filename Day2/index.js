//Butes t ASCII

function bytesToAscii(bytesToAscii){

    return bytesToAscii.map(byte=> String.fromCharCode(byte)).join('');


}
const bytes =[72,101,108,108,111];
const asciiString =bytesToAscii(bytes);
console.log(asciiString)

