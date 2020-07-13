/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface MintableErc20Interface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, amount]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    decimals: TypedFunctionDescription<{encode([]: []): string}>;

    decreaseAllowance: TypedFunctionDescription<{
      encode([spender, subtractedValue]: [string, BigNumberish]): string;
    }>;

    increaseAllowance: TypedFunctionDescription<{
      encode([spender, addedValue]: [string, BigNumberish]): string;
    }>;

    mint: TypedFunctionDescription<{encode([value]: [BigNumberish]): string}>;

    name: TypedFunctionDescription<{encode([]: []): string}>;

    symbol: TypedFunctionDescription<{encode([]: []): string}>;

    totalSupply: TypedFunctionDescription<{encode([]: []): string}>;

    transfer: TypedFunctionDescription<{
      encode([recipient, amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([sender, recipient, amount]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [string | null, string | null, null]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [string | null, string | null, null]): string[];
    }>;
  };
}

export class MintableErc20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MintableErc20;
  attach(addressOrName: string): MintableErc20;
  deployed(): Promise<MintableErc20>;

  on(event: EventFilter | string, listener: Listener): MintableErc20;
  once(event: EventFilter | string, listener: Listener): MintableErc20;
  addListener(eventName: EventFilter | string, listener: Listener): MintableErc20;
  removeAllListeners(eventName: EventFilter | string): MintableErc20;
  removeListener(eventName: any, listener: Listener): MintableErc20;

  interface: MintableErc20Interface;

  functions: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(account: string): Promise<BigNumber>;

    decimals(): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mint(value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;

    name(): Promise<string>;

    symbol(): Promise<string>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  allowance(owner: string, spender: string): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string): Promise<BigNumber>;

  decimals(): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  mint(value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;

  name(): Promise<string>;

  symbol(): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Approval(owner: string | null, spender: string | null, value: null): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish): Promise<BigNumber>;

    balanceOf(account: string): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    decreaseAllowance(spender: string, subtractedValue: BigNumberish): Promise<BigNumber>;

    increaseAllowance(spender: string, addedValue: BigNumberish): Promise<BigNumber>;

    mint(value: BigNumberish): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;

    transferFrom(sender: string, recipient: string, amount: BigNumberish): Promise<BigNumber>;
  };
}
