



function AsciiToByte(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}
  const asciiString ="fjkh948";
  const byte =  AsciiToByte(asciiString);
  console.log(byte); // Output: "Hello"