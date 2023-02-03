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

export const ClaimShares = () => {
  const handleSuccess = () => {
    console.log("success");
  };

  return (
    <CardContainer>
      <Card width="60rem">
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

      <Card width="60rem">
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

      <Card width="60rem">
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
            <DataSm>You can get 10 shares for your 2 Red Pil Nfts</DataSm>
            <Claim tokenIds={["4"]} onSuccess={handleSuccess} />
          </CardGuts>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

// useDao

// useClaimer
// // rpc call to get perNft- *** hard code this for now

// useNftBalance
// // erc721 subgraph fetch on connected address
// // has an nft
// // wrap a rpc call to test nftShaman 'claims' on the token id
// // list of ids w/ claimed bool

// ui
// // header image based on nft
// // headline and text
// // 3 cards
// // // beer info
// // // claim nft link
// // // claim shares

// claim shares
// // STATE: if account has unclaimed nfts
// // display how many shares they can get

// // STATE: nothing to claim

// // STATE: indicate how many nft holding and how many claimed
