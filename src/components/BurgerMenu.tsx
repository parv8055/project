import { useState } from "react";
import { Button, Drawer } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;
const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="text" onClick={showDrawer}>
        Open
      </Button>
      <Drawer placement="left" onClose={onClose} open={open}>
        <div className="w-full max-w-[20rem] p-6 font-medium">
          <div className="sidebar">
            <SettingFilled spin="true" />
            <Title level={4}>Home</Title>
          </div>
          <div>
            <Title level={4}>Token</Title>
            <div className="sidebar">
              <SettingFilled spin="true" />
              <Title level={4}>Token Creator</Title>
            </div>
            <div className="sidebar">
              <SettingFilled spin="true" />
              <Title level={4}>Token Multisender</Title>
            </div>
            <div className="sidebar">
              <SettingFilled spin="true" />
              <Title level={4}>Create Token Sale</Title>
            </div>
          </div>
          <div>
            <Title level={4}>NFT</Title>
            <div className="sidebar">
              <SettingFilled spin="true" />
              <Title level={4}>Create NFT Staking</Title>
            </div>
            <div className="sidebar">
              <SettingFilled spin="true" />
              <Title level={4}>NFT Manager</Title>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
