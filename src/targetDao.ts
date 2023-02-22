import { ValidNetwork } from "@daohaus/keychain-utils";

export type NftClaimer = {
  name: string;
  description: string;
  nftAddress: string;
  shaman: string;
};

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: string;
    SAFE_ADDRESS: string;
    CHAIN_ID: ValidNetwork;
    NFT_CLAMIERS: { [key: string]: NftClaimer };
  };
} = {
  "0xc035": {
    ADDRESS: "0x3dea7058a19bf6854bb63384707139636efb99ea",
    SAFE_ADDRESS: "0x47f327bdde3c92d82872d686bb6d7a994c22b4a5",
    CHAIN_ID: "0x5",
    NFT_CLAMIERS: {
      "0xaA5DC030FE06fAd5A2152d430696F66F6B4582f2": {
        name: "Red Pils",
        description: "A beautiful straw blond crusher of a brew",
        nftAddress: "0xf294588CC8DBAE15230a726F0f93487eB0fcF25D",
        shaman: "0xaA5DC030FE06fAd5A2152d430696F66F6B4582f2",
      },
      "0x3521923550b1b99a75adf75970e109254ed4e34d": {
        name: "Spork and Sour",
        description: "Fruited Sour",
        nftAddress: "0xc5550ff6d3f5761de8d9c0083c0075cb5e53d4fd",
        shaman: "0x3521923550b1b99a75adf75970e109254ed4e34d",
      },
      "0x03": {
        name: "Green Pils",
        description: "Italian Style Kveik Pilsner",
        nftAddress: "0xf294588CC8DBAE15230a726F0f93487eB0fcF25D",
        shaman: "0x03",
      },
    },
  },
};
