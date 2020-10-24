# eth-token-encode
Encode easily the data value of Ethereum (Also works with Binance Smartchain, and any ethereum fork) for token transactions.

## NPM and version
[![npm version](https://badge.fury.io/js/eth-token-encode.svg)](https://www.npmjs.com/package/eth-token-encode)

## Install
Install using NPM with the following command:
```
npm i eth-token-encode
```

## Usage

Here are a few examples that can be used:
``` javascript
const genData  = require('eth-token-encode'); 

let data = new genData(18);  // creates object

data.generate('0x82B176BBdd8892df7d6B4b46Ec446a07A60F347E', 0.1) // returns 0xa9059cbb00000000000000000000000082B176BBdd8892df7d6B4b46Ec446a07A60F347E000000000000000000000000000000000000000000000000016345785d8a0000

```
Keep in mind that this is only for token transfers! You should set the ``value`` to ``0x0`` and  ``data`` to this encoded value.
For now it only works with the contract function ``transfer(address,uint256)`` (``0xa9059cbb``)
## API
### ``genData(decimals)``
``decimals`` is the number of decimals of said token/contract, (Ex. 18 for most tokens)

### ``.generate(toAddress, Amount)``
``toAddress`` is the receiving address in a valid hex format.
``Amount`` is the number of tokens desired to send.


## Dependencies
### [isStrHex](https://www.npmjs.com/package/isstrhex)
### [locutus](https://www.npmjs.com/package/locutus)



## Test
Run `npm test` for more tests.

## Notes
1. This is still a WIP, functional but basic.
2. Main reason of this was to interact with Binance SmartChain as most existing packages won't work on the signing part.
3. If you had the same trouble as me, I'd recommend to use [@warren-bank/ethereumjs-tx-sign](https://www.npmjs.com/package/@warren-bank/ethereumjs-tx-sign) instead of ethereumjs-tx (ChainID for BSC doesn't work with ethereumjs-tx, plus it's lightweight).

## Might implement:
1. Direct use with [@warren-bank/ethereumjs-tx-sign](https://www.npmjs.com/package/@warren-bank/ethereumjs-tx-sign) for easier signing.
2. File with common tokens to support easier search.
