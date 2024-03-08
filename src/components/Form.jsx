import { Form, Switch, Input, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const { TextArea } = Input;

export default function FormComp() {
  return (
    <div>
      <div className="text-center my-4">
        <Title>Solana Token Creator</Title>
        <Title level={4}>
          Easily Create your own Solana SPL Token in just 7+1 steps without
          Coding.
        </Title>
      </div>

      <div className="bg-white p-4 sm:p-8 md:p-12 rounded-xl">
        <Form layout="vertical">
          <div className="md:flex md:space-x-4">
            <div className="w-full md:w-6/12">
              <Form.Item className="font-medium" label="Name:">
                <Input className="p-2" placeholder="Put your " />
              </Form.Item>
            </div>
            <div className="w-full md:w-6/12">
              <Form.Item className="font-medium" label="Symbol:">
                <Input className="p-2" placeholder="Put your " />
              </Form.Item>
            </div>
          </div>
          <div className="md:flex md:space-x-4">
            <div className="w-full md:w-6/12">
              <Form.Item className="font-medium" label="Decimals:">
                <Input className="p-2" placeholder="Put your " />
              </Form.Item>
            </div>
            <div className="w-full md:w-6/12">
              <Form.Item className="font-medium" label="Supply:">
                <Input className="p-2" placeholder="Put your " />
              </Form.Item>
            </div>
          </div>
          <div className="md:flex md:space-x-4">
            <div className="w-full md:w-6/12">
              <Form.Item className="font-medium" label="Description:">
                <TextArea
                  className="p-2"
                  rows={5}
                  placeholder="Put the description of your token"
                />
              </Form.Item>
            </div>
            <div className="w-full md:w-6/12">
              <Form.Item className="font-medium" label="Description:">
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                </Dragger>
              </Form.Item>
            </div>
          </div>

          <Form.Item
            className="font-medium"
            label="Switch"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          {true && (
            <div className="md:flex md:space-x-4">
              <div className="w-full md:w-3/12">
                <Form.Item className="font-medium" label="Website:">
                  <Input className="p-2" placeholder="Put your website" />
                </Form.Item>
              </div>
              <div className="w-full md:w-3/12">
                <Form.Item className="font-medium" label="Twitter:">
                  <Input className="p-2" placeholder="Put your twitter" />
                </Form.Item>
              </div>
              <div className="w-full md:w-3/12">
                <Form.Item className="font-medium" label="Telegram:">
                  <Input className="p-2" placeholder="Put your telegram" />
                </Form.Item>
              </div>
              <div className="w-full md:w-3/12">
                <Form.Item className="font-medium" label="Discord:">
                  <Input className="p-2" placeholder="Put your discord" />
                </Form.Item>
              </div>
            </div>
          )}
          <Button className="block mx-auto">Select Wallet</Button>
        </Form>
      </div>
    </div>
  );
}
