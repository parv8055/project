import { Form, Switch, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";

const { Dragger } = Upload;
const { TextArea } = Input;

type formType = {
  label: String;
  placeholder?: string;
  props?: {
    name: string;
    multiple: boolean;
    action: string;
    onChange(info: any): void;
    onDrop(e: any): void;
  };
};
export function FormInput({ label, placeholder }: formType) {
  return (
    <Form.Item className="" label={label}>
      <Input className="p-2" placeholder={placeholder} />
    </Form.Item>
  );
}
export function FormSwitch({ label }: formType) {
  return (
    <Form.Item label={label} valuePropName="checked">
      <Switch />
    </Form.Item>
  );
}
export function FormTextArea({ label, placeholder }: formType) {
  return (
    <Form.Item label={label}>
      <TextArea className="p-2" rows={5} placeholder={placeholder} />
    </Form.Item>
  );
}
export function FormUpload({ label, props }: formType) {
  return (
    <Form.Item label={label}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
    </Form.Item>
  );
}
