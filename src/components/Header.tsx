import { BurgerSidebar } from "./Sidebar";
import { useWeb3React } from "@web3-react/core";
import WalletCard from "./WalletCard";

export default function Header() {
  const { connector, hooks } = useWeb3React()
  return (
    <header className="bg-white bg-gradient-to-r from-space sticky top-0 z-10 shadow">
      <nav className="mx-auto flex items-center justify-between md:justify-end max-w-9xl p-4 px-6">
        <BurgerSidebar />
        <WalletCard connector={connector} hooks={hooks} name='phantom' />
      </nav>
    </header>
  );
}
