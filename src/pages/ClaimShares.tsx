import { Card, DataSm, H2, H4, ParSm, Spinner } from "@daohaus/ui";
import styled from "styled-components";
import { Claim } from "../components/Claim";
import redPilImage from "../assets/logo_footer_vgaciq.svg";

import { useDHConnect } from "@daohaus/connect";
import { useAccountNfts } from "../hooks/useAccountNfts";
import { TARGET_DAO } from "../targetDao";
import { useParams } from "react-router-dom";
import { InfoLinks } from "../components/InfoLinks";

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  margin-bottom: 2rem;
  .img-block {
    display: flex;
    height: 12rem;
    width: 12rem;
  }
  img {
    height: 12rem;
    width: 12rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 5rem 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CardGuts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 3rem;
  margin-bottom: 3rem;
`;

const cardWidth = "80rem";

const CLAIMER_DATA = TARGET_DAO[import.meta.env.VITE_TARGET_KEY].NFT_CLAMIERS;

export const ClaimShares = () => {
  const { address } = useDHConnect();
  const { nftClaimer } = useParams();

  const { nfts, isLoading } = useAccountNfts({
    nftAddress: nftClaimer && CLAIMER_DATA[nftClaimer].nftAddress,
    accountAddress: address,
    shamanAddress: nftClaimer,
  });

  const handleSuccess = () => {
    console.log("success");
  };

  if (!nftClaimer) return null;

  return (
    <CardContainer>
      <H2 style={{ marginBottom: "2.4rem" }}>Join Raid Brood</H2>

      <Card width={cardWidth}>
        <CardContent>
          <ImageContainer>
            <div className="img-block">
              <img src={redPilImage} />
            </div>
          </ImageContainer>
          <H4>1. Drink {CLAIMER_DATA[nftClaimer].name}</H4>
          <CardGuts>
            <ParSm>Did you find a can? Drink that sucker!</ParSm>
          </CardGuts>
          <H4>2. Claim Your Proof of Drink NFT</H4>
          <CardGuts>
            <ParSm>
              Find the QR code on that empty can. You might need to peel off a
              label!
            </ParSm>
          </CardGuts>
          <H4>3. Get Your DAO Shares</H4>
          <CardGuts>
            <ParSm>
              Did you get the NFT? You should be able to claim a DAO share.
              Welcome to Web3 brewing!
            </ParSm>
            {nftClaimer && nfts?.length ? (
              <Claim
                tokenIds={nfts.map((nft: any) => nft.identifier)}
                shamanAddress={nftClaimer}
                onSuccess={handleSuccess}
              />
            ) : (
              <>
                {isLoading && <Spinner />}
                {!isLoading && <DataSm>You don't hold any nfts</DataSm>}
              </>
            )}
          </CardGuts>
        </CardContent>
      </Card>

      <InfoLinks />
    </CardContainer>
  );
};
