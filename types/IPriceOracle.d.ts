/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface IPriceOracleInterface extends Interface {
  functions: {
    getAssetPrice: TypedFunctionDescription<{
      encode([_asset]: [string]): string;
    }>;

    setAssetPrice: TypedFunctionDescription<{
      encode([_asset, _price]: [string, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class IPriceOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IPriceOracle;
  attach(addressOrName: string): IPriceOracle;
  deployed(): Promise<IPriceOracle>;

  on(event: EventFilter | string, listener: Listener): IPriceOracle;
  once(event: EventFilter | string, listener: Listener): IPriceOracle;
  addListener(eventName: EventFilter | string, listener: Listener): IPriceOracle;
  removeAllListeners(eventName: EventFilter | string): IPriceOracle;
  removeListener(eventName: any, listener: Listener): IPriceOracle;

  interface: IPriceOracleInterface;

  functions: {
    getAssetPrice(_asset: string): Promise<BigNumber>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  getAssetPrice(_asset: string): Promise<BigNumber>;

  setAssetPrice(
    _asset: string,
    _price: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    getAssetPrice(_asset: string): Promise<BigNumber>;

    setAssetPrice(_asset: string, _price: BigNumberish): Promise<BigNumber>;
  };
}
