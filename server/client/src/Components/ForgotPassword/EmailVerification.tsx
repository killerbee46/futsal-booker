import React, { useState } from 'react';
import ForgotPasswordContainer from './ForgotPasswordContainer';
import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const [form] = useForm();
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const verifyEmail = (values: { email: string }) => {
    console.log(values);
    const submit = () => {
      message.success('Email Verified');
      history(`/auth/forgot-password-dob?email=${values?.email}`);
      setLoading(false);
    };
    if (values?.email === 'right@email.com') {
      setLoading(true);
      setTimeout(submit, 1000);
    } else {
      message.error('Email does not exist.');
    }
  };
  return (
    <ForgotPasswordContainer title="Email Verification">
      <Form layout="vertical" form={form} onFinish={verifyEmail}>
        <Form.Item
          name={'email'}
          label="Email"
          rules={[
            { required: true, message: 'Email is required' },
            {
              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Invalid email'
            }
          ]}
        >
          <Input size="large" width={'100%'} />
        </Form.Item>
        <Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Button loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </ForgotPasswordContainer>
  );
};

export default EmailVerification;
