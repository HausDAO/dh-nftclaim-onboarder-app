import { Routes as Router, Route } from "react-router-dom";
import HomeContainer from "./pages/HomeContainer";
import { Home } from "./pages/Home";
import { ClaimShares } from "./pages/ClaimShares";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<HomeContainer />}>
        <Route index element={<Home />} />
        <Route element={<Home />} />
        <Route path="claim-shares/:nftClaimer" element={<ClaimShares />} />
      </Route>
    </Router>
  );
};
