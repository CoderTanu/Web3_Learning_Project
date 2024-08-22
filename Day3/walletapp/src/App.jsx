import { generateMnemonic } from "bip39";
import {useState} from 'react';
import {SolanaWallet} from '../src/Components/SolanaWallet'
import {ETHWallet} from '../src/Components/ETHWallet'
import { Buffer } from 'buffer';
import 'unorm'; 

// Assign Buffer globally (for use in other libraries)
window.Buffer = Buffer;

function App() {

  //Create a mnemonics state variable
  const [mnemonic, setMnemonic] = useState("");




  return (
    <>
 
    <SolanaWallet></SolanaWallet> 
<br></br>
    <ETHWallet></ETHWallet>
  
{/* 
  <button onClick={async function() {
  const mn = await generateMnemonic();
  setMnemonic(mn)
  console.log("mn  --"+mn);   }}>
  Create Seed Phrase
</button>
   <br></br> <br></br>
<span><textarea type="text" value={mnemonic}></textarea></span> */}

    </>
  )
}

export default App
