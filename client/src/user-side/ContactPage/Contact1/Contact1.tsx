import MainContainer from "@/components/Maincontainer/Maincontainer";
import {
  Form,
  Space,
  Input,
  Button,
  Row,
  Col,
  Flex,
  Select,
  InputNumber,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
const { Item } = Form;
const { Option } = Select;

export const Contact1 = () => {
  const prefixSelector = (
    <Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="+977">+977</Option>
        <Option value="001">001</Option>
      </Select>
    </Item>
  );
  return (
    <MainContainer>
      <Flex className="justify-center">
        <Form layout="vertical" className="w-full">
          <Row gutter={[20, 0]}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Item
                label="First Name:"
                name={"First Name"}
                rules={[
                  { required: true, message: "Please enter your first name!" },
                ]}
                className="w-full"
              >
                <Input
                  placeholder="Enter your first name"
                  className="w-full min-w-[200px]"
                />
              </Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Item
                label="Last Name:"
                name={"Last Name"}
                rules={[
                  { required: true, message: "Please enter your first name!" },
                ]}
                className="w-full"
              >
                <Input
                  placeholder="Enter your Last name"
                  className="w-full min-w-[200px]"
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={[20, 0]}>
            <Col flex={1}>
              <Item
                label="Address:"
                name={"Address"}
                rules={[
                  {
                    required: false,
                    message: "Please enter your first address!",
                  },
                ]}
                className="w-full"
              >
                <Input
                  placeholder="Enter your address"
                  className="w-full min-w-[200px]"
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={[20, 0]}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  { message: "Please enter a valid phone number" },
                ]}
              >
                <InputNumber
                  addonBefore={prefixSelector}
                  className="w-full min-w-[200px]"
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col flex={1}>
              <Item
                name="message"
                label="Your Message"
                rules={[
                  {
                    required: true,
                    message: "Please enter your message first!",
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Enter your message..."
                  maxLength={6}
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col flex={1}>
              <Item>
                <Button type="primary" htmlType="submit" className="bg-primary">
                  Submit
                </Button>
              </Item>
            </Col>
          </Row>
        </Form>
      </Flex>
    </MainContainer>
  );
};

export default Contact1;
