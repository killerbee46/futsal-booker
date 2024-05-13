import ForgotPasswordContainer from './ForgotPasswordContainer';
import { Button, Typography, message } from 'antd';
import { useQuery } from '../../utils/Hooks/useQuery';
import { OtpInput } from '@beeaver/bui.components.otp-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const query = useQuery();
  const email = query.get('email');
  const dob = query.get('dob');
  const history = useNavigate();
  const [otp, setOtp] = useState('');

  const verifyOTP = (e: string) => {
    if (e === '9346') {
      message.success('Verified');
      history(`/auth/forgot-password-new-password?email=${email}`);
    } else {
      message.error('Could not verify');
    }
    console.log(e);
  };
  return (
    <ForgotPasswordContainer title="Input OTP">
      <Typography.Paragraph className="text-center">
        An OTP has been sent to <a href={`mailto:${email}`}>{email}</a>.
      </Typography.Paragraph>
      <OtpInput
        numInput={4}
        onSubmit={verifyOTP}
        allowClear
        loading={true}
        // inputFieldStyle={{

        // }}
        submitButtonStyle={{
          background: 'limegreen',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          color: 'white'
        }}
        resetButtonStyle={{
          background: 'red',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          color: 'white'
        }}
      />
      <Typography.Paragraph
        className="text-center"
        underline
        style={{ color: 'blue', cursor: 'pointer' }}
      >
        Did not get code?
      </Typography.Paragraph>
    </ForgotPasswordContainer>
  );
};

export default OTPVerification;
