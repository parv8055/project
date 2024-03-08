import { PlusOutlined } from "@ant-design/icons";
import { Form, Switch, Upload, Input, Button } from "antd";
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const { TextArea } = Input;

export default function FormComp() {
  return (
    <div>
      <h1 className="py-4 text-center text-4xl md:text-6xl font-bold">
        Solana Token Creator
      </h1>
      <h3 className="py-4 text-center text-base md:text-xl font-normal">
        Easily Create your own Solana SPL Token in just 7+1 steps without
        Coding.
      </h3>
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
              <div>
                <Form.Item className="font-medium" label="Decimals:">
                  <Input className="p-2" placeholder="Put your " />
                </Form.Item>
              </div>
              <div>
                <Form.Item className="font-medium" label="Supply:">
                  <Input className="p-2" placeholder="Put your discord" />
                </Form.Item>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Form.Item
                className="font-medium" label="Image:"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div>Upload</div>
                  </button>
                </Upload>
              </Form.Item>
            </div>
          </div>
          <Form.Item className="font-medium" label="Description:">
            <TextArea className="p-2" rows={4} placeholder="Put the description of your token" />
          </Form.Item>

          <Form.Item className="font-medium" label="Switch" valuePropName="checked">
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
