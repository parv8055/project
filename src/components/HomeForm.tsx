import { Form } from "antd";
import { message } from "antd";
import { FormInput, FormSwitch, FormTextArea, FormUpload } from "./ui/Form";
import { Heading1, Heading5, Heading6, Text } from "./ui/Typography";
import ButtonCustom from "./ui/Button";

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

export default function HomeForm() {
  return (
    <div>
      <div className="text-center my-4">
        <Heading1>Solana Token Creator</Heading1>
        <Heading6 className="text-gray-200">
          Easily Create your own Solana SPL Token in just 7+1 steps without
          Coding.
        </Heading6>
      </div>

      <div className="bg-white p-4 sm:p-8 md:p-12 rounded-xl shadow-l">
        <div className="md:flex md:space-x-4">
          <Form layout="vertical" className="md:w-6/12">
            <div className="sm:flex sm:space-x-4">
              <div className="w-full sm:w-6/12">
                <FormInput label="Name :" placeholder="Put your " />
              </div>
              <div className="w-full sm:w-6/12">
                <FormInput label="Symbol :" placeholder="Put your " />
              </div>
            </div>
            <div className="sm:flex sm:space-x-4">
              <div className="w-full sm:w-6/12">
                <FormInput label="Decimals :" placeholder="Put your " />
              </div>
              <div className="w-full sm:w-6/12">
                <FormInput label="Supply :" placeholder="Put your " />
              </div>
            </div>
            <div>
              <FormTextArea
                label="Description:"
                placeholder="Put the description of your token"
              />
              <FormUpload label="Description :" props={props} />
            </div>
            <div>
              <FormSwitch label="Switch" />
            </div>
            {true && (
              <div>
                <div className="sm:flex sm:space-x-4">
                  <div className="w-full sm:w-6/12">
                    <FormInput
                      label="Website :"
                      placeholder="Put your Website"
                    />
                  </div>
                  <div className="w-full sm:w-6/12">
                    <FormInput
                      label="Twitter :"
                      placeholder="Put your Twitter"
                    />
                  </div>
                </div>
                <div className="sm:flex sm:space-x-4">
                  <div className="w-full sm:w-6/12">
                    <FormInput
                      label="Telegram :"
                      placeholder="Put your Telegram"
                    />
                  </div>
                  <div className="w-full sm:w-6/12">
                    <FormInput
                      label="Discord :"
                      placeholder="Put your Discord"
                    />
                  </div>
                </div>
              </div>
            )}
          </Form>
          <div className="md:w-6/12 bg-gray-100 my-4 p-4 sm:p-8 rounded-xl">
            <Heading5 className="mb-8">Token Information</Heading5>

            <div className="flex">
              <div className="w-4/12 space-y-4">
                {[...Array(10)].map((i) => (
                  <Text className="block">Sample :</Text>
                ))}
              </div>
              <div className="w-8/12 space-y-4">
                {[...Array(10)].map((i) => (
                  <Text className="block">Token</Text>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-centers">
          <ButtonCustom>Select Wallet</ButtonCustom>
        </div>
      </div>
    </div>
  );
}
