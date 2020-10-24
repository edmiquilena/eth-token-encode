const genEthData = require('..');
const assert = require('assert').strict;
describe("Validate Eth token encode to work", () => {

	//test a function for a specific case
	it("should return valid encode data value (0xa9059cbb00000000000000000000000082B176BBdd8892df7d6B4b46Ec446a07A60F347E000000000000000000000000000000000000000000000000016345785d8a0000)", ()=> {
let data = new genEthData(18);
let toAddress = '0x82B176BBdd8892df7d6B4b46Ec446a07A60F347E';
let Amount = 0.1;
assert.ok(typeof data.generate(toAddress, Amount) === 'string');
   	})

	it("Should return invalid Address format", () => {
        let data = new genEthData(18);
        let toAddress = '0x82B176BBdd8892df7d6B4b46Ec446a07A60F347ELL';
        let Amount = 0.1;
                assert.throws(() => data.generate(toAddress, Amount), Error);
        
	})
  
	it("Should return invalid Address format for length", () => {
        let data = new genEthData(18);
        let toAddress = '0x82B176BBdd8892df7d6B4b46Ec446a07A';
        let Amount = 0.1;
                assert.throws(() => data.generate(toAddress, Amount), Error);
        
    })
    
	it("Should return invalid format for amount", () => {
        let data = new genEthData(18);
        let toAddress = '0x82B176BBdd8892df7d6B4b46Ec446a07A60F347E';
        let Amount = '0.1';
                assert.throws(() => data.generate(toAddress, Amount), Error);
        
	})
})
