import { SettingFilled } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;
export default function Sidebar() {
  return (
    <div className="w-3/12 p-4 border-r-2 border-gray hidden md:block font-medium bg-background sticky top-16 left-0 h-fit">
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
  );
}
