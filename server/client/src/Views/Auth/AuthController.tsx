import { useNavigate, useParams } from 'react-router-dom';
import Auth from './Auth';
import SetNewPassword from '@Component/ForgotPassword/SetNewPassword';
import BirthdayVerification from '@Component/ForgotPassword/BirthdayVerification';
import EmailVerification from '@Component/ForgotPassword/EmailVerification';
import OTPVerification from '@Component/ForgotPassword/OTPVerification';

const AuthController = () => {
  const params = useParams();
  const history = useNavigate();
  if (!params) {
    history('/auth/login');
  }
  switch (params.action) {
    case '/':
      return <Auth redirect={true} />;
    case 'login':
      return <Auth />;
    case 'register':
      return <Auth />;
    case 'forgot-password':
      return <EmailVerification />;
    case 'forgot-password-dob':
      return <BirthdayVerification />;
    case 'forgot-password-otp':
      return <OTPVerification />;
    case 'forgot-password-new-password':
      return <SetNewPassword />;
    default:
      return <div>Hello</div>;
  }
};

export default AuthController;
