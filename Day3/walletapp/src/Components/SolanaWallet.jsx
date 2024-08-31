import {useState} from 'react';
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export  function SolanaWallet({mnemonic}){
 const [currentIndex, setCurrentIndex] =useState(0);
 const [publicKey, setPublicKey] =useState([]);

    return <div>
     <button onClick={ async function (){
    const seed = await mnemonicToSeedSync(mnemonic);
    console.log("seed ---" + seed);
    console.log("mnemonic"+mnemonic);
    const path =`m/44'/501'/${currentIndex}'/0'`;
    console.log("path ---" + path);
    
    const derivedSeed = derivePath(path,seed.toString('hex')).key;
    console.log("derivedSeed ---" + derivedSeed);
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log("secret ---" + secret);

    const keyPair =Keypair.fromSecretKey(secret);
    console.log("keyPair ---" + keyPair);

    setCurrentIndex(currentIndex+1);
    setPublicKey([...publicKey, keyPair.publicKey]);

    console.log("currentIndex ---" + currentIndex);
    console.log("publicKey ---" + publicKey);
 }}>
        Add Solana wallet
     </button>
      {/* {publicKey.map(p => <div>
            {p.toBase58()}
        </div>)} 
         <br></br><br></br>
        <div><textarea type="text" value={publicKey} readOnly></textarea></div>  */}
    </div>
}