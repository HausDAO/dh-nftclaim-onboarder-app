import React from "react";
import { handleErrorMessage, TXLego } from "@daohaus/utils";
import { useDHConnect } from "@daohaus/connect";
import { useTxBuilder } from "@daohaus/tx-builder";
import { DataSm, Spinner, useToast } from "@daohaus/ui";

import { TX } from "../legos/tx";
import { useParams } from "react-router-dom";
import { TARGET_DAO } from "../targetDao";
import { GatedButton } from "./GatedButton";
import { useNftClaimStatus } from "../hooks/useAccountNfts";

export const Claim = ({
  onSuccess,
  tokenIds,
  shamanAddress,
  disabled = false,
}: {
  onSuccess: () => void;
  tokenIds: string[];
  shamanAddress: string;
  disabled?: boolean;
}) => {
  const { fireTransaction } = useTxBuilder();
  const { chainId } = useDHConnect();
  const { nftClaimer } = useParams();
  const { errorToast, defaultToast, successToast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  console.log("tokenIds", tokenIds);

  const { claims } = useNftClaimStatus({
    shamanAddress,
    tokenIds,
  });

  console.log("claims", claims);

  const unclaimedIds = tokenIds.reduce((acc: string[], id: string) => {
    if (claims[id] === "0") {
      return [...acc, id];
    }
    return acc;
  }, []);

  console.log("unclaimedIds", unclaimedIds);

  const handleClaim = () => {
    setIsLoading(true);
    fireTransaction({
      tx: { ...TX.CLAIM_SHARES, staticArgs: [unclaimedIds] } as TXLego,
      callerState: { nftClaimer },
      lifeCycleFns: {
        onTxError: (error) => {
          const errMsg = handleErrorMessage({
            error,
          });
          errorToast({ title: "Claim Failed", description: errMsg });
          setIsLoading(false);
        },
        onTxSuccess: () => {
          defaultToast({
            title: "Claim Success",
            description: "Please wait for subgraph to sync",
          });
        },
        onPollError: (error) => {
          const errMsg = handleErrorMessage({
            error,
          });
          errorToast({ title: "Poll Error", description: errMsg });
          setIsLoading(false);
        },
        onPollSuccess: () => {
          successToast({
            title: "Claim Success",
            description: "Claim success",
          });
          onSuccess();
          setIsLoading(false);
        },
      },
    });
  };

  const isConnectedToDao =
    chainId === TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID
      ? true
      : "You are not connected to the same network as the DAO";
  return (
    <>
      {unclaimedIds && unclaimedIds.length > 0 ? (
        <>
          <DataSm>
            You can have {unclaimedIds.length} nft
            {unclaimedIds.length > 1 && "s"} with unclaimed DAO shares
          </DataSm>

          <GatedButton
            color="primary"
            rules={[isConnectedToDao]}
            onClick={handleClaim}
            disabled={disabled}
            style={{ padding: "1.2rem" }}
          >
            {isLoading ? (
              <Spinner size="2rem" strokeWidth=".2rem" />
            ) : (
              "Get DAO Shares"
            )}
          </GatedButton>
        </>
      ) : (
        <DataSm>Nothing to claim</DataSm>
      )}
    </>
  );
};
