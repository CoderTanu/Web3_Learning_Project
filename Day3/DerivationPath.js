const {generateMnemonic,mnemonicToSeedSync} = require("bip39");
const {derivePath}  = require("ed25519-hd-key");
const { Keypair } = require('@solana/web3.js');
const nacl = require('tweetnacl');
nacl.util = require('tweetnacl-util');


//1. Create mnemonic
const mnemonic = generateMnemonic();

//2. creat seed
const seed = mnemonicToSeedSync(mnemonic);

//3. Derivation path

for(let i=0; i<4; i++){
// This is the derivation path
const path =  `m/44'/501'/${i}'/0'`;
const derivedSeed = derivePath(path, seed.toString("hex")).key;
const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
const keypair = Keypair.fromSecretKey(secret);
const publicKeyBase58 = keypair.publicKey.toBase58();
console.log("path  --" + path);
console.log("derivedSeed  --" + derivedSeed);
console.log("secret ---" + secret);
console.log("publicKeyBase58  ---" +publicKeyBase58);
}


