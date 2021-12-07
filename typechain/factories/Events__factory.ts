/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Events } from "../Events";

export class Events__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Events> {
    return super.deploy(overrides || {}) as Promise<Events>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Events {
    return super.attach(address) as Events;
  }
  connect(signer: Signer): Events__factory {
    return super.connect(signer) as Events__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Events {
    return new Contract(address, _abi, signerOrProvider) as Events;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "events",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "eventsMap",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_eventId",
        type: "string",
      },
    ],
    name: "findEventById",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b69806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630b791430146100515780634376132f14610083578063e257a94c146100b5578063f538e175146100d1575b600080fd5b61006b60048036038101906100669190610877565b610103565b60405161007a93929190610930565b60405180910390f35b61009d600480360381019061009891906107ca565b61025a565b6040516100ac93929190610930565b60405180910390f35b6100cf60048036038101906100ca919061080b565b610422565b005b6100eb60048036038101906100e691906107ca565b61054d565b6040516100fa93929190610930565b60405180910390f35b6000818154811061011357600080fd5b906000526020600020906003020160009150905080600001805461013690610a4a565b80601f016020809104026020016040519081016040528092919081815260200182805461016290610a4a565b80156101af5780601f10610184576101008083540402835291602001916101af565b820191906000526020600020905b81548152906001019060200180831161019257829003601f168201915b5050505050908060010180546101c490610a4a565b80601f01602080910402602001604051908101604052809291908181526020018280546101f090610a4a565b801561023d5780601f106102125761010080835404028352916020019161023d565b820191906000526020600020905b81548152906001019060200180831161022057829003601f168201915b5050505050908060020160009054906101000a900460ff16905083565b6060806000806001856040516102709190610919565b908152602001604051809103902060405180606001604052908160008201805461029990610a4a565b80601f01602080910402602001604051908101604052809291908181526020018280546102c590610a4a565b80156103125780601f106102e757610100808354040283529160200191610312565b820191906000526020600020905b8154815290600101906020018083116102f557829003601f168201915b5050505050815260200160018201805461032b90610a4a565b80601f016020809104026020016040519081016040528092919081815260200182805461035790610a4a565b80156103a45780601f10610379576101008083540402835291602001916103a4565b820191906000526020600020905b81548152906001019060200180831161038757829003601f168201915b505050505081526020016002820160009054906101000a900460ff16151515158152505090508060400151156103ef578060000151816020015182604001519350935093505061041b565b600060405180602001604052806000815250906040518060200160405280600081525090935093509350505b9193909250565b600060405180606001604052808481526020018381526020016001151581525090506000819080600181540180825580915050600190039060005260206000209060030201600090919091909150600082015181600001908051906020019061048c9291906106aa565b5060208201518160010190805190602001906104a99291906106aa565b5060408201518160020160006101000a81548160ff0219169083151502179055505050806001846040516104dd9190610919565b908152602001604051809103902060008201518160000190805190602001906105079291906106aa565b5060208201518160010190805190602001906105249291906106aa565b5060408201518160020160006101000a81548160ff021916908315150217905550905050505050565b60018180516020810182018051848252602083016020850120818352809550505050505060009150905080600001805461058690610a4a565b80601f01602080910402602001604051908101604052809291908181526020018280546105b290610a4a565b80156105ff5780601f106105d4576101008083540402835291602001916105ff565b820191906000526020600020905b8154815290600101906020018083116105e257829003601f168201915b50505050509080600101805461061490610a4a565b80601f016020809104026020016040519081016040528092919081815260200182805461064090610a4a565b801561068d5780601f106106625761010080835404028352916020019161068d565b820191906000526020600020905b81548152906001019060200180831161067057829003601f168201915b5050505050908060020160009054906101000a900460ff16905083565b8280546106b690610a4a565b90600052602060002090601f0160209004810192826106d8576000855561071f565b82601f106106f157805160ff191683800117855561071f565b8280016001018555821561071f579182015b8281111561071e578251825591602001919060010190610703565b5b50905061072c9190610730565b5090565b5b80821115610749576000816000905550600101610731565b5090565b600061076061075b8461099a565b610975565b90508281526020810184848401111561077857600080fd5b610783848285610a08565b509392505050565b600082601f83011261079c57600080fd5b81356107ac84826020860161074d565b91505092915050565b6000813590506107c481610b1c565b92915050565b6000602082840312156107dc57600080fd5b600082013567ffffffffffffffff8111156107f657600080fd5b6108028482850161078b565b91505092915050565b6000806040838503121561081e57600080fd5b600083013567ffffffffffffffff81111561083857600080fd5b6108448582860161078b565b925050602083013567ffffffffffffffff81111561086157600080fd5b61086d8582860161078b565b9150509250929050565b60006020828403121561088957600080fd5b6000610897848285016107b5565b91505092915050565b6108a9816109f2565b82525050565b60006108ba826109cb565b6108c481856109d6565b93506108d4818560208601610a17565b6108dd81610b0b565b840191505092915050565b60006108f3826109cb565b6108fd81856109e7565b935061090d818560208601610a17565b80840191505092915050565b600061092582846108e8565b915081905092915050565b6000606082019050818103600083015261094a81866108af565b9050818103602083015261095e81856108af565b905061096d60408301846108a0565b949350505050565b600061097f610990565b905061098b8282610a7c565b919050565b6000604051905090565b600067ffffffffffffffff8211156109b5576109b4610adc565b5b6109be82610b0b565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610a35578082015181840152602081019050610a1a565b83811115610a44576000848401525b50505050565b60006002820490506001821680610a6257607f821691505b60208210811415610a7657610a75610aad565b5b50919050565b610a8582610b0b565b810181811067ffffffffffffffff82111715610aa457610aa3610adc565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610b25816109fe565b8114610b3057600080fd5b5056fea26469706673582212201c12186e3c2c63fbb4e395e22c6e45ecd49ad92858ad8bfaeaee34efdb7bb50c64736f6c63430008030033";
