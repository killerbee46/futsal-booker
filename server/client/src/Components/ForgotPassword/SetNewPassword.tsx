import React, { useState } from 'react';
import ForgotPasswordContainer from './ForgotPasswordContainer';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useQuery } from '../../utils/Hooks/useQuery';
import { ResetPasswordTypes } from '../../utils/Types/Auth/AuthTypes';

const SetNewPassword = () => {
  const [password, setPassword] = useState('');
  const passwordRegex = RegExp(`(?:^|)${password}(?:$|)`);
  const query = useQuery();
  const email = query.get('email');
  const [form] = useForm();
  const changePassword = (values: ResetPasswordTypes) => {
    const formData = {
      email: email,
      password: values?.password
    };
    console.log(formData);
  };

  return (
    <ForgotPasswordContainer title="Set New Password">
      <Form form={form} onFinish={changePassword} layout="vertical">
        <Form.Item
          name={'password'}
          label="Password"
          rules={[{ required: true, message: 'Required' }]}
        >
          <Input.Password onChange={e => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
          name={'confirm-password'}
          label="Confirm Password"
          rules={[
            { required: true, message: 'Required' },
            { pattern: passwordRegex, message: 'Passwords do not match' }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ForgotPasswordContainer>
  );
};

export default SetNewPassword;
