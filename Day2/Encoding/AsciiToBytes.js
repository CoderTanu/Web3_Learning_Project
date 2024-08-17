
function AsciiToBytes(ascii){

    const byteArray = [];
    for(let i =0; i<ascii.length; i++){
        byteArray.push(ascii.charCodeAt(i));
    }
   return byteArray;
}


const ascii ="Tanu";
const bytesString = AsciiToBytes(ascii);
console.log(bytesString);