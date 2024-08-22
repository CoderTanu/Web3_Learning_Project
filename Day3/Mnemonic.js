const  { generateMnemonic }  = require('bip39');

const mnemonic = generateMnemonic();
console.log("mnemonic" +mnemonic);