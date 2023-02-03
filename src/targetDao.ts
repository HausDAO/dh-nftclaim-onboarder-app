import { ValidNetwork } from "@daohaus/keychain-utils";

export type NftClaimer = {
  name: string;
  nftAddress: string;
  shaman: string;
};

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: string;
    SAFE_ADDRESS: string;
    CHAIN_ID: ValidNetwork;
    NFT_CLAMIERS: NftClaimer[];
  };
} = {
  "0xc035": {
    ADDRESS: "0x3dea7058a19bf6854bb63384707139636efb99ea",
    SAFE_ADDRESS: "0x47f327bdde3c92d82872d686bb6d7a994c22b4a5",
    CHAIN_ID: "0x5",
    NFT_CLAMIERS: [
      {
        name: "Red Pil",
        nftAddress:
          "https://goerli.etherscan.io/address/0xf294588CC8DBAE15230a726F0f93487eB0fcF25D",
        shaman: "0xaA5DC030FE06fAd5A2152d430696F66F6B4582f2",
      },
    ],
  },
};
