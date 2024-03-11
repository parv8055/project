import { Heading5, Text } from "./ui/Typography";
import ButtonCustom from "./ui/Button";
import { useState } from "react";
import { Drawer } from "antd";

export function SidebarContent() {
  return (
    <>
      <ButtonCustom type="text" className="w-full p-6">
        <Text>Home</Text>
      </ButtonCustom>
      <div>
        <Heading5>Token</Heading5>
        {[...Array(4)].map((i) => (
          <ButtonCustom type="text" className="w-full p-6" key={i}>
            <Text>Token Creator</Text>
          </ButtonCustom>
        ))}
      </div>
      <div>
        <Heading5>NFT</Heading5>
        {[...Array(3)].map((i) => (
          <ButtonCustom type="text" className="w-full p-6" key={i}>
            <Text>Creator</Text>
          </ButtonCustom>
        ))}
      </div>
    </>
  );
}

export function Sidebar() {
  return (
    <div className="w-2/12 p-4 border-r-2 border-gray-100 space-y-8 hidden md:block sticky top-16 left-0 h-screen">
      <SidebarContent />
    </div>
  );
}
export const BurgerSidebar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ButtonCustom type="text" onClick={showDrawer} className="flex md:hidden">
        Open
      </ButtonCustom>
      <Drawer placement="left" onClose={onClose} open={open} size="default">
        <div className="w-full max-w-[20rem] p-6 border">
          <SidebarContent />
        </div>
      </Drawer>
    </>
  );
};
