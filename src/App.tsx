import { ChainProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
// import { wallets as keplr } from "@cosmos-kit/keplr";
import { wallets as keplr } from "@cosmos-kit/keplr-extension";
import Header from "./components/Header";

import "@interchain-ui/react/styles";

export default function App() {
  // call index.ts file with ts-codegen

  return (
    <ChainProvider
      chains={chains} // supported chains
      assetLists={assets} // supported asset lists
      wallets={[...keplr]} // supported wallets
      // walletConnectOptions={} // required if `wallets` contains mobile wallets
      // walletModal={}
    >
      <Header />
    </ChainProvider>
  );
}
