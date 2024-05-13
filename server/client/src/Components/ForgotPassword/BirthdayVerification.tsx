import { useState } from 'react';
import ForgotPasswordContainer from './ForgotPasswordContainer';
import { Button, DatePicker, Form, Typography, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../utils/Hooks/useQuery';

const BirthdayVerification = () => {
  const [form] = useForm();
  const query = useQuery();
  const history = useNavigate();
  const email = query.get('email');
  const [dob, setDob] = useState('');
  const [dobVerified, setDobVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const validateDob = async (values: { dob: string }) => {
    setLoading(true);
    const date = dayjs(values?.dob).format('YYYY-MM-DD');
    verifyDob(date).then(function submit() {
      console.log(dobVerified);
      setTimeout(submitData, 1000, values, date);
    });
  };

  const verifyDob = async (date: string) => {
    if (date === '2023-05-31') {
      setDobVerified(true);
      setLoading(false);
      message.success('Birth date verified');
    } else {
      message.error('Date could not be verified');
      setLoading(false);
    }
  };
  const submitData = (date: string) => {
    setDob(date);
    const formData = {
      dob: dob,
      email: email
    };
    console.log(formData);
  };
  const getOTP = () => {
    history(`/auth/forgot-password-otp?email=${email}&dob=${dob}`);
  };
  return (
    <ForgotPasswordContainer>
      {loading ? (
        <div> Loading ...</div>
      ) : (
        <>
          {dobVerified ? (
            <div
              style={{
                height: '200px',
                textAlign: 'center',
                alignItems: 'center'
              }}
            >
              <Typography.Title
                level={3}
                style={{ textAlign: 'center', marginBottom: 20 }}
              >
                Request OTP
              </Typography.Title>
              <Button type="primary" onClick={getOTP}>
                Get OTP
              </Button>
            </div>
          ) : (
            <>
              <Typography.Title
                level={3}
                style={{ textAlign: 'center', marginBottom: 20 }}
              >
                Verify your birthdate
              </Typography.Title>
              <Form form={form} onFinish={validateDob} layout="vertical">
                <Form.Item
                  name={'dob'}
                  label="Birth Date"
                  rules={[
                    { required: true, message: 'Birth Date is required' }
                  ]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item>
                  <div style={{ textAlign: 'center' }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </>
          )}
        </>
      )}
    </ForgotPasswordContainer>
  );
};

export default BirthdayVerification;
