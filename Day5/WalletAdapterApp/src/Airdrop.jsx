import {useWallet,useConnection} from "@solana/wallet-adapter-react"


//The useWallet 'hook' 'provide' the wallet  variable inside the Airdrop component
export function Airdrop(){
    //hook in react
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendAirdopToUser(){
      const amount =document.getElementById("publicKey").value;
       await connection.requestAirdrop(wallet.publicKey, amount*1000000000);
       alert("hi there");
    }
    
    return <div>
      <input  id ="publicKey" type="text" placeholder="Amount"></input>
      <button onClick={sendAirdopToUser}>Send Airdrop</button>
    </div>
}