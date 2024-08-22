
import {mnemonicToSeedSync} from 'bip39'
import {useState} from 'react';
import { Wallet, HDNodeWallet } from "ethers";

export function ETHWallet({mnemonic}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    return <div>
      <button onClick={async function(){
   
       const seed = await mnemonicToSeedSync(mnemonic);
       const derivationPath =`m/44'/60'/${currentIndex}'/0'`;
       const hdNode = HDNodeWallet.fromSeed(seed);
       const child = hdNode.derivePath(derivationPath);
       const privateKey = child.privateKey;
       const wallet = new Wallet(privateKey);
       setCurrentIndex(currentIndex + 1);
       setAddresses([...addresses, wallet.address]);
      }}>
         Add ETH Wallet
      </button>
      {addresses.map(p => <div>
                Eth - {p}
            </div>)}
            <br></br><br></br>
            <div><textarea type="text" value={addresses}></textarea></div> 
            
    </div>
}