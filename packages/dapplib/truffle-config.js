require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remove coffee inflict process swallow square'; 
let testAccounts = [
"0x0186b38f22a748e5fdcf612c64581eaf433c13e7a4d64d19d412b809ab093eae",
"0x5ae9a61c2efa24d9c77012b28bfc105984b0d2c994dc19b6db962150741d7d6a",
"0x3d115ff9f27de3b087c9f10883150b91683a0992fbfea251ccba9d1b29c9215c",
"0x14b4d0f6a4905f6a8bf3ad8740e9d850f465dd9568e866f7f898b41231e265eb",
"0xcd1af361685516d1441f363eb9addc1aa6118b1b04b8f94ecc70a7d727402f5a",
"0x2219f8bd72dad066d68e2e23cc6872fb57e84cfccd096a8f39c99d10f38c235a",
"0xee90f530dacfe9a30842782c1771ecf4b03b7656a37d740e7671ca382e99cdbf",
"0x592ec498a4709fd57f3a78ac2891d1f7437bdbfa40a747c98b039a104c0260b2",
"0x607a7f1d3c0fbbf63221c2728821b1d87e470030ae65e379d4770d8a5d56e00b",
"0xca9a5d7f1a0cd6081cdc0fc6eb6b156378356a363ca75503c7fbf34f76efd71d"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
