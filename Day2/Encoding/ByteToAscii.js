
function bytesToAscii(byte){
    return  byte.map(bytes => String.fromCharCode(bytes)).join('');
}


const byte =[ 84, 97, 110, 117 ];
const asciiString = bytesToAscii(byte);
console.log(asciiString);