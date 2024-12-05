import {createInitializeAccount2Instruction, createInitializeMint2Instruction, Transaction, createMint} from "@solana/spl-token";
import { sendAndConfirmTransaction } from "@solana/web3.js";
export function TokenLauncher(){


   async function createToken(){

      const lamports = await getMinimumBalanceForRentExemptMint(connection);

      //you create a new  mint account
      //you first create a new keypair for this new mint account
      //owner
      const transaction = new Transaction().add(
        SystemProgram.createAccount({
            fromPubKey: Payer.publicKey,
            newAccountubKey:keypair.publicKey,
            space:MINT_SIZE,
            lamports,
            programId   //whe own this account
        }),
        createInitializeMint2Instruction(keypair, publickey, decimals, mintAuthority, freezeAuthority,rogramId)
      );

      await sendAndConfirmTransaction(connection,transaction, [payer, kaypair], confirmOptions)

        // console.log("inside create token")
        // const name = document.getElementById('name').value;
        // const symbol = document.getElementById('symbol').value;
        // const image = document.getElementById('image').value;
        // const supply = document.getElementById('supply').value;
        // console.log("inside " +name +symbol + image +supply)
      }
    }

    return <div style={{
         height:'100vh',
        display:'flex',
         justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className ='inputText' type='text' placeholder='Name' id='name'></input><br></br>
        <input  className ='inputText' type='text' placeholder='Symbol' id='symbol'></input><br></br>
        <input  className ='inputText' type='text' placeholder='Image Url' id='image' ></input><br></br>
        <input  className ='inputText' type='text' placeholder='Intital Supply'  id='supply'></input><br></br>
        <button  onClick={createToken} className ='btn'> Create a Token </button>
    </div>

}