const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array){
return bs58.encode(uint8Array);
}

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base58Encoded =  uint8ArrayToBase58(uint8Array);
console.log(base58Encoded);