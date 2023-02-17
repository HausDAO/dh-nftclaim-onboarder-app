import styled from "styled-components";

import { useDHConnect } from "@daohaus/connect";
import { HAUS_RPC } from "@daohaus/keychain-utils";
import { TXBuilder } from "@daohaus/tx-builder";
import { Outlet, useLocation } from "react-router-dom";
import { useDao } from "../hooks/useDao";
import { TARGET_DAO } from "../targetDao";
import { Footer } from "@daohaus/ui";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function HomeContainer() {
  const location = useLocation();
  const { provider, address } = useDHConnect();
  const { dao } = useDao({
    daoId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS,
    chainId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
  });

  return (
    <PageContainer>
      <TXBuilder
        provider={provider}
        chainId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID}
        daoId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}
        safeId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].SAFE_ADDRESS}
        appState={{ dao, memberAddress: address }}
        rpcs={{
          "0x1": `https://${
            import.meta.env.VITE_RIVET_KEY
          }.eth.rpc.rivet.cloud/`,
          "0x5": `https://${
            import.meta.env.VITE_RIVET_KEY
          }.goerli.rpc.rivet.cloud/`,
          "0x64": HAUS_RPC["0x64"],
        }}
        explorerKeys={{
          "0x1": import.meta.env.VITE_EXPLORER_KEY,
          "0x5": import.meta.env.VITE_EXPLORER_KEY,
        }}
        graphApiKeys={{
          "0x1": import.meta.env.VITE_GRAPH_API_KEY_MAINNET,
        }}
      >
        <Outlet />
      </TXBuilder>
      <Footer />
    </PageContainer>
  );
}

export default HomeContainer;
