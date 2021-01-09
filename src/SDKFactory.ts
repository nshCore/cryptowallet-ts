import Bitcoin from './SDKS/bitcoin';
import Ethereum from './SDKS/ethereum';
import ERC20 from './SDKS/erc20';

namespace CryptoWallet {
  export const createSDK = function SDKFactory(sdk: string, api?: any) {
    switch (sdk) {
      case 'Bitcoin':
        return new Bitcoin(api);

      case 'Ethereum':
        return new Ethereum(api);

      case 'ERC20':
        return new ERC20(api);

      default:
        return new Bitcoin(api);
    }
  };
}
export default CryptoWallet;
