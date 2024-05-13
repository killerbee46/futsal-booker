import React from 'react';
import { Form, Input, Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { LOGIN } from '../GQL/mutation/loginMutation';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

interface LoginParams {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [loginUser, { loading, error }] = useMutation(LOGIN);
  const handleSubmit = (values: LoginParams) => {
    loginUser({ variables: { ...values } });

    navigate('/');
  };
  return (
    <div className="flex align_center direction_column">
      <h1>Login Form</h1>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Email"
          name={'email'}
          rules={[{ required: true, message: 'Email Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={'password'}
          rules={[{ required: true, message: 'Password Required' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={loading}
            type="primary"
            size="large"
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
