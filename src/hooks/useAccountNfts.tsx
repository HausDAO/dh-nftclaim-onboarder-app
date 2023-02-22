// useRequest.js
import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";
import { DEFAULT_GRAPH_URL, TCR_GRAPH_URL } from "../utils/constants";
import { createContract } from "@daohaus/tx-builder";
import { HAUS_RPC } from "@daohaus/keychain-utils";

import { TARGET_DAO } from "../targetDao";
import NFT_CLAIMER_ABI from "../abis/NFTClaimerShaman.json";

const API_URL =
  TCR_GRAPH_URL[TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID];

const graphQLClient = new GraphQLClient(API_URL || DEFAULT_GRAPH_URL);

// TODO: types

const getClaimStatus = async ({
  shamanAddress,
  tokenId,
}: {
  shamanAddress: string;
  tokenId: string;
}) => {
  const SharesContract = createContract({
    address: shamanAddress,
    // @ts-ignore-error
    abi: NFT_CLAIMER_ABI,
    chainId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
    rpcs: {
      "0x1": `https://${import.meta.env.VITE_RIVET_KEY}.eth.rpc.rivet.cloud/`,
      "0x5": `https://${
        import.meta.env.VITE_RIVET_KEY
      }.goerli.rpc.rivet.cloud/`,
      "0x64": HAUS_RPC["0x64"],
    },
  });

  return await SharesContract.claims(tokenId);
};

export const useAccountNfts = ({
  nftAddress,
  accountAddress,
}: {
  nftAddress?: string;
  accountAddress: string | null | undefined;
  shamanAddress?: string;
}) => {
  const { data, ...rest } = useQuery(
    ["get-nft-list", { nftAddress, accountAddress }],
    () =>
      graphQLClient.request(
        gql`
          query tokens($nftAddress: String!, $accountAddress: String!) {
            tokens(
              where: {
                registry_: { id: $nftAddress }
                owner_: { id: $accountAddress }
              }
            ) {
              identifier
            }
          }
        `,
        {
          nftAddress: nftAddress?.toLowerCase(),
          accountAddress: accountAddress?.toLowerCase(),
        }
      ),
    { enabled: !!nftAddress && !!accountAddress }
  );

  return {
    nfts: data?.tokens,
    ...rest,
  };
};

export const useNftClaimStatus = ({
  shamanAddress,
  tokenIds,
}: {
  shamanAddress: string;
  tokenIds: string[];
}) => {
  const { data, ...rest } = useQuery(
    ["get-nft-claims", { shamanAddress, tokenIds }],
    () => {
      return Promise.all(
        tokenIds.map(
          async (tokenId) => await getClaimStatus({ shamanAddress, tokenId })
        )
      );
    },
    { enabled: !!shamanAddress && !!tokenIds.length }
  );

  const claims: { [key: string]: string } = tokenIds.reduce((acc, id, i) => {
    const newAcc = { ...acc, [id]: data ? data[i].toString() : undefined };
    return newAcc;
  }, {});

  return {
    claims,
    ...rest,
  };
};
