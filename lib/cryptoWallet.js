import SDKFactory from './SDKFactory';
var CryptoWallet;
(function (CryptoWallet) {
    class CryptoWalletJS {
        constructor() {
            this.SDKFactory = SDKFactory;
        }
    }
    CryptoWallet.CryptoWalletJS = CryptoWalletJS;
})(CryptoWallet || (CryptoWallet = {}));
export default CryptoWallet.CryptoWalletJS;
