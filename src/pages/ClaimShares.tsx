import {
  Card,
  DataSm,
  H1,
  H2,
  H4,
  Link,
  ParMd,
  ParSm,
  ParXl,
  SingleColumnLayout,
} from "@daohaus/ui";
import styled from "styled-components";
import { Claim } from "../components/Claim";
import redPilImage from "../assets/logo_footer_vgaciq.svg";
import { useDHConnect } from "@daohaus/connect";
import { useAccountNfts } from "../hooks/useAccountNfts";
import { TARGET_DAO } from "../targetDao";
import { useParams } from "react-router-dom";

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
`;

const cardWidth = "80rem";

const CLAIMER_DATA = TARGET_DAO[import.meta.env.VITE_TARGET_KEY].NFT_CLAMIERS;

export const ClaimShares = () => {
  const { address } = useDHConnect();
  const { nftClaimer } = useParams();

  const { nfts } = useAccountNfts({
    nftAddress: nftClaimer && CLAIMER_DATA[nftClaimer].nftAddress,
    accountAddress: address,
    shamanAddress: nftClaimer,
  });

  console.log("nfts", nfts);

  const handleSuccess = () => {
    console.log("success");
  };

  return (
    <CardContainer>
      <Card width={cardWidth}>
        <CardContent>
          <ImageContainer>
            <div className="img-block">
              <img src={redPilImage} />
            </div>
          </ImageContainer>
          <H4>1. Drink Red Pil</H4>
          <ParSm>
            If the Jamaica Red Ale of a black velvet greedily teaches a soggy
            Busch, then a keg trembles
          </ParSm>
        </CardContent>
      </Card>

      <Card width={cardWidth}>
        <CardContent>
          <ImageContainer>
            <div className="img-block">
              <img src={redPilImage} />
            </div>
          </ImageContainer>
          <H4>2. Claim Your Red Pil NFT</H4>
          <CardGuts>
            <ParSm>
              When an Amarillo Pale Ale takes a coffee break, an often
              radioactive Bacardi Silver hides
            </ParSm>
            <Link
              href="https://brood.raidguild.org/redpill"
              linkType="external"
            >
              Claim NFT Here
            </Link>
          </CardGuts>
        </CardContent>
      </Card>

      <Card width={cardWidth}>
        <CardContent>
          <ImageContainer>
            <div className="img-block">
              <img src={redPilImage} />
            </div>
          </ImageContainer>
          <H4>2. Get Your DAO Shares</H4>
          <CardGuts>
            <ParSm>
              A monkey bite over a chain saw eats a slurly hammered Full Sail
              IPA
            </ParSm>
            {nftClaimer && nfts?.length ? (
              <Claim
                tokenIds={nfts.map((nft: any) => nft.identifier)}
                shamanAddress={nftClaimer}
                onSuccess={handleSuccess}
              />
            ) : (
              <DataSm>You don't hold any nfts</DataSm>
            )}
          </CardGuts>
        </CardContent>
      </Card>
    </CardContainer>
  );
};
