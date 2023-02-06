import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import {
  Bold,
  border,
  DataSm,
  H2,
  Link,
  ParLg,
  ParMd,
  SingleColumnLayout,
  Theme,
} from "@daohaus/ui";
import { RiArrowRightSLine } from "react-icons/ri/index.js";

import { HausAnimated } from "../components/HausAnimated";
import { NftClaimer, TARGET_DAO } from "../targetDao";

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 10rem;
`;

const ListItemContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-top: 1px ${({ theme }: { theme: Theme }) => theme.secondary.step6}
    solid;
`;

const ListItemLink = styled(RouterLink)`
  text-decoration: none;
  width: 100%;
  color: unset;
  :hover {
    text-decoration: none;
  }
`;

const ListItemHoverContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: ${border.radius};

  :hover {
    background: 1px ${({ theme }: { theme: Theme }) => theme.secondary.step3};
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  word-wrap: break-word;
`;

const StyledIcon = styled(RiArrowRightSLine)`
  fill: ${({ theme }: { theme: Theme }) => theme.primary.step9};
  font-size: 3rem;
`;

const CLAIMER_DATA = TARGET_DAO[import.meta.env.VITE_TARGET_KEY].NFT_CLAMIERS;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <HausAnimated />
      <H2 style={{ marginBottom: "2.4rem" }}>Join Raid Brood</H2>
      <ParMd style={{ marginBottom: "2.4rem" }}>
        If you hold the any of these NFTs you can can claim shares in the Raid
        Brood DAO.
      </ParMd>

      {Object.keys(CLAIMER_DATA).map((key: string, i: number) => {
        return (
          <ListItemContainer key={CLAIMER_DATA[key].shaman}>
            <ListItemLink to={`/claim-shares/${CLAIMER_DATA[key].shaman}`}>
              <ListItemHoverContainer>
                <ListItem>
                  <ParLg>
                    <Bold>{CLAIMER_DATA[key].name}</Bold>
                  </ParLg>
                  <DataSm>Description and maybe an image here</DataSm>
                </ListItem>
                <StyledIcon />
              </ListItemHoverContainer>
            </ListItemLink>
          </ListItemContainer>
        );
      })}

      <LinkBox>
        <Link href="https://brood.raidguild.org/" linkType="external">
          More Info
        </Link>
        <Link
          href={`https://admin.daohaus.club/#/molochv3/${
            TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID
          }/${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}`}
          linkType="external"
        >
          Raid Brood DAO
        </Link>
      </LinkBox>
    </SingleColumnLayout>
  );
};
