
const crypto =require('crypto');


// Generate a random encryption key
const key = crypto.randomBytes(32); // 32 bytes = 256 bits
const iv = crypto.randomBytes(16); // Initialization vector (IV)

function encrypt(text){
    const cipher =crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted =cipher.update(text, 'utf8','hex');
    encrypted +=cipher.final('hex');
    return encrypted;
}



function decrypt(encryptedText){

    const cipher =crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted =cipher.update(encryptedText, 'hex', 'utf8');
    decrypted +=cipher.final('utf8');
    return decrypted;

}


// Example usage
const textToEncrypt = 'Hello, World!';
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log("textToEncrypt"+textToEncrypt);
console.log("encryption"+ encryptedText);
console.log("decryption"+decryptedText);