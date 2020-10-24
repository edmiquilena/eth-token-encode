const isHex = require('isstrhex');
const printf = require('util').format;
const str_pad = require('locutus/php/strings/str_pad');
class TokenData {
   
    
constructor(token) {
this.token = {decimals: token};
}

values() {
    console.log(this);
}
prepare() {
    this.to = this.sanitizeHex(to);
}
sanitizeHex(hex)  {

    if(hex.startsWith("0x")) {
  
  hex =  hex.replace("0x", "");
    }
  
  if(hex.length == 0 ||!isHex(hex) ) {
     throw Error('Invalid hex fomart');
  }
  
    return hex;
  }

   generate(toAddress, Amount) {
       if(typeof toAddress !== 'string') {
        process.exitCode = 1;
        throw  Error('String expected on address.');
       } 
       if(typeof Amount !=='number')  {
        process.exitCode = 1;
        throw Error('Number expected on amount.');
      } 
   // convert from ether to wei
       Amount = (Amount)*(Math.pow(10,this.token.decimals));

    // "a9059cbb" stands for Transfer method on Contracts
    // transfer(address,uint256)  
    toAddress = this.sanitizeHex(toAddress);
    if (toAddress.length !== 40) {
   throw Error('Invalid format, must be 40 chars');
    }
    var data = printf('0x%s%s%s',
    str_pad('a9059cbb', 32, '0', 'STR_PAD_RIGHT'),
    str_pad(toAddress, 32, '0', 'STR_PAD_LEFT'),
    str_pad(this.sanitizeHex(Amount.toString(16)), 64, '0', 'STR_PAD_LEFT'));
   return data;

    }

}

module.exports = TokenData;
