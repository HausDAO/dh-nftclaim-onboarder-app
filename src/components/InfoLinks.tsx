import React from "react";
import styled from "styled-components";

import { Link } from "@daohaus/ui";
import { TARGET_DAO } from "../targetDao";

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 10rem;
`;

export const InfoLinks = () => {
  return (
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
  );
};
