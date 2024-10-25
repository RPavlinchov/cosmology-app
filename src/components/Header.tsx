import ConnectButton from "./ConnectButton";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export default function Header() {
  //   const rpcURL = "https://rpc.atlantic-2.seinetwork.io:443";
  const rpcURL = "https://rpc.dukong.mantrachain.io";
  //

  const contractAddress =
    // "sei16qrzhjcw9p95p5d0n4mnfesyfwp9dg3hz6npd4xlpe8xfu7ce75q3m4hsz";
    "mantra1us7rryvauhpe82fff0t6gjthdraqmtm5gw8c808f6eqzuxmulacqzkzdal";
  const queryMsg = `{
    "pools": {}
  }`;

  const queryContract = async (rpcURL, contractAddress, queryMsg) => {
    const client = await SigningCosmWasmClient.connect(rpcURL);
    const queryResult = await client.queryContractSmart(
      contractAddress,
      JSON.parse(queryMsg)
    );
    console.log(queryResult);
  };

  queryContract(rpcURL, contractAddress, queryMsg);

  return (
    <div className="flex border-b-2 border-t-2 border-gray-900 bg-gray-200 justify-between items-center">
      <div>COSMO</div>
      <ConnectButton chainName="seitestnet2" />
    </div>
  );
}
