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
  "0xc17f71ecd0c9d8a5ecc455c56ec553d14505d769": {
    ADDRESS: "0xc17f71ecd0c9d8a5ecc455c56ec553d14505d769",
    SAFE_ADDRESS: "0x96b0d2077f740c861cc7ed322ae20153ea80da74",
    CHAIN_ID: "0x64",
    NFT_CLAMIERS: {
      "0xca6f82da209b20271493969a53facf513007416": {
        name: "Red Pil",
        description: "A beautiful straw blond crusher of a brew",
        nftAddress: "0x018A869ee8Ba15002d0B025eeb3c776142091f97",
        shaman: "0xca6f82da209b20271493969a53facf513007416",
      },
      "0xc5134E012ED3861db640fF00E680B0Ad5C7d425e": {
        name: "Spork and Sour",
        description: "Fruited Sour",
        nftAddress: "0xbc0f3dc298d1c319d6865ceb3b12bbc6aaf5f89e",
        shaman: "0xc5134E012ED3861db640fF00E680B0Ad5C7d425e",
      },
      "0x84008dbc89af882db4a44624034c3f4bc1994a18": {
        name: "Green Pil",
        description: "Italian Style Kveik Pilsner",
        nftAddress: "0x6D6eF9e8eEa0C37e41e0442C2797F17c8476bEec",
        shaman: "0x84008dbc89af882db4a44624034c3f4bc1994a18",
      },
    },
  },
};
