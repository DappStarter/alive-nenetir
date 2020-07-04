require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski street crawl ridge purse harvest muscle army gift'; 
let testAccounts = [
"0xdce22fe61cfb0ee1d79b6c9ed7a8f9769ea66a6bad0485d9a38dc8d98fda9db6",
"0xf7059393704a5e1f7e858cb40d855680115e67cacd583223e6612d1b3960d894",
"0x72cb5af0cb940e46e7292174a585a48ebd151a8d6bab102044e6e0ea65c2ef83",
"0xe1d56f352d8fba0f360e71c2e446945cd843049cbba66b7297bbc4efc9485fc3",
"0xdf6f5ad587ee46cbd78cc2559310f84a8d86d8694a486729dc37498781ad67d9",
"0xa4085cf8427e319982de8489bc3a78903c4f7c760f8eceba0c685310ceab4927",
"0x451c715e84e72ca29e476fdd2f9034b5441879c0971d2b5e6e9efabfece3c148",
"0x76370880871abe4ab60e0aa59dc828a2dc632bbb15eb803c56b8c7dcdffb349f",
"0xd057068ccc277a0cd5426828405d6415f400fb9d8763cfd11f4f5c6f64035158",
"0x3265dc3253bbd76a6b6b0c04d1a7471cf215b4627d8af09dd58d57122188bc13"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
