import { Typography, Input, Button, Form, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { FORMSTATE, LoginFormData, SetupFormTypes } from './SetupFormTypes';

const SuperAdmin = ({ updateFormState, formData, updateFormData }: any) => {
  const [form] = useForm();
  const updateForm = (values: LoginFormData) => {
    updateFormData({
      ...formData,
      email: values?.email,
      password: values?.password
    });
    updateFormState(FORMSTATE.DEPARTMENT);
  };
  return (
    <div>
      <Typography.Title className="text_center" level={3}>
        Add an User
      </Typography.Title>
      <Form form={form} layout="vertical" onFinish={updateForm}>
        <Form.Item
          label="Username"
          name={'username'}
          rules={[{ required: true, message: 'Username Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name={'email'}
          rules={[{ required: true, message: 'Email Required' }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={'password'}
          rules={[{ required: true, message: 'Password Required' }]}
        >
          <Input type="password" size="large" />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name={'phoneNumber'}
          rules={[{ required: true, message: 'Phone Number Required' }]}
        >
          <Input type="number" size="large" />
        </Form.Item>
        <Form.Item
          label="Gender"
          name={'gender'}
          rules={[{ required: true, message: 'Please Select Gender' }]}
        >
          <Select
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' }
            ]}
          />
        </Form.Item>
        <div className="flex justify_between">
          <Button type="text" size="large">
            SKIP
          </Button>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              NEXT
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default SuperAdmin;
