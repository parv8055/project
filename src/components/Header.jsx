import { Button } from "antd";
import { Typography } from "antd";
import { lazy } from "react";
const BurgerMenu = lazy(() => import("./BurgerMenu"));

const { Text } = Typography;
export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6">
        <div className="block md:hidden">
          <BurgerMenu />
        </div>

        <div>LOGO</div>
        <div className="w-full max-w-lg hidden md:flex justify-between items-center font-medium">
          <Button type="text">Software</Button>
          <Button type="text">Learn</Button>
          <Button type="text">Tool</Button>
          <Button type="text">Support</Button>
        </div>
        <Button>Select Wallet</Button>
      </nav>
    </header>
  );
}
