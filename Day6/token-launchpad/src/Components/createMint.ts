

export async function createMint(
    connection: Connection,
    payer: Signer,
    mintAuthority: PublicKey,
    freezeAuthority: PublicKey |null,
    decimals:number,
    confirmOptional?:ConfirmOption,
    programId: TOKEN_PROGRAM_ID
):Promise<PublicKey>
}