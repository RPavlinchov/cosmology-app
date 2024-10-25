import { useChain } from "@cosmos-kit/react";

export default function Component({ chainName }: { chainName: string }) {
  const chainContext = useChain(chainName);

  const { status, username, address, message, connect, disconnect, openView } =
    chainContext;

  console.log("Print hook status", status);
  console.log("Print hook username", username);
  console.log("Print hook address", address);
  console.log("Print hook message", message);
  console.log("Print hook connect", connect);
  console.log("Print hook disconnect", disconnect);
  console.log("Print hook openView", openView);

  return (
    <>
      <button onClick={connect}>Connect</button>
    </>
  );
}
