import { useChain, useChains } from "@cosmos-kit/react";

export default function ConnectButton({ chainName }: { chainName: string }) {
  //   const chainContext = useChain(chainName);

  // const {
  //   status,
  //   username,
  //   address,
  //   message,
  //   connect,
  //   disconnect,
  //   openView,
  // } = chainContext;

  const chains = useChains([
    "seitestnet2",
    "cosmoshub",
    "osmosis",
    "stargaze",
    "juno",
    "akash",
  ]);

  const connected = Object.values(chains).every(
    (chain) => chain.isWalletConnected
  );

  const { connect, openView } = chains.seitestnet2;

  //   console.log("Print hook status", status);
  //   console.log("Print hook username", username);
  //   console.log("Print hook address", address);
  //   console.log("Print hook message", message);
  //   console.log("Print hook connect", connect);
  //   console.log("Print hook disconnect", disconnect);
  //   console.log("Print hook openView", openView);

  return (
    <>
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={() => (connected ? openView() : connect())}
      >
        {connected ? "Disconnect" : "Connect"}
      </button>
    </>
  );
}
