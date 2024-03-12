import { useEffect, useState } from "react";
import { Web3ReactSelectedHooks } from "@web3-react/core";
import { Connector } from "@web3-react/types";
import ButtonCustom from "./ui/Button";

export default function WalletCard({
  connector,
  hooks,
  name,
}: {
  connector: Connector;
  hooks: Web3ReactSelectedHooks;
  name: string;
}) {
  const {
    useSelectedAccount,
    useSelectedChainId,
    useSelectedIsActive,
    useSelectedIsActivating,
  } = hooks;
  const isActivating = useSelectedIsActivating(connector);
  const isActive = useSelectedIsActive(connector);
  const account = useSelectedAccount(connector);
  const chain = useSelectedChainId(connector);

  const [error, setError] = useState<Error | undefined>(undefined);
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");

  const handleToggleConnect = () => {
    setError(undefined); // clear error state

    if (isActive) {
      if (connector?.deactivate) {
        void connector.deactivate();
      } else {
        void connector.resetState();
      }
    } else if (!isActivating) {
      setConnectionStatus("Connecting..");
      Promise.resolve(connector.activate(1)).catch((e) => {
        connector.resetState();
        setError(e);
      });
    }
  };
  useEffect(() => {
    if (isActive) {
      setConnectionStatus("Connected");
    } else {
      setConnectionStatus("Disconnected");
    }
  }, [isActive]);

  console.log(error?.message ? "Error: " + error.message : connectionStatus);
  console.log(account ? account : "No Account Detected");
  console.log(chain ? chain : "No Chain Connected");

  return (
    <ButtonCustom onClick={handleToggleConnect}>
      {isActive ? "Disconnect" : "Connect"}
    </ButtonCustom>
  );
}
