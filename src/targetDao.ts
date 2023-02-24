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
  "0xe160ba2cb286888d54cf51a8b3fc01ecce8ccb44": {
    ADDRESS: "0xe160ba2cb286888d54cf51a8b3fc01ecce8ccb44",
    SAFE_ADDRESS: "0xcfbda71c58d9864e196f21b8530d7a4a66a0eda0",
    CHAIN_ID: "0x64",
    NFT_CLAMIERS: {
      "0x29e682AF081caF314df5B9CFD1f78Eb23c2Fc456": {
        name: "Red Pil",
        description: "A beautiful straw blond crusher of a brew",
        nftAddress: "0x018A869ee8Ba15002d0B025eeb3c776142091f97",
        shaman: "0x29e682AF081caF314df5B9CFD1f78Eb23c2Fc456",
      },
      "0xd13b5309f3b6a54664db8c273ba314e6cd26c716": {
        name: "Spork and Sour",
        description: "Fruited Sour",
        nftAddress: "0xbc0f3dc298d1c319d6865ceb3b12bbc6aaf5f89e",
        shaman: "0xd13b5309f3b6a54664db8c273ba314e6cd26c716",
      },
      "0x63da3a1cf582e40f7b369c120e6c997c20e93b7a": {
        name: "Green Pil",
        description: "Italian Style Kveik Pilsner",
        nftAddress: "0x6D6eF9e8eEa0C37e41e0442C2797F17c8476bEec",
        shaman: "0x63da3a1cf582e40f7b369c120e6c997c20e93b7a",
      },
    },
  },
};
