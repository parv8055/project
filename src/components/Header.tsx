import { BurgerSidebar } from "./Sidebar";
import ButtonCustom from "./ui/Button";

export default function Header() {
  return (
    <header className="bg-white bg-gradient-to-r from-space sticky top-0 z-10 shadow">
      <nav className="mx-auto flex items-center justify-between md:justify-end max-w-9xl p-4 px-6">
        <BurgerSidebar />
        <ButtonCustom>Select Wallet</ButtonCustom>
      </nav>
    </header>
  );
}
