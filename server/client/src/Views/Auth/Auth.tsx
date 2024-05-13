import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Auth = ({ redirect }: { redirect?: boolean }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    if (isLoggedIn) {
      history('/');
    }
    if (redirect) {
      history('/auth/login');
    }
  }, [isLoggedIn, redirect]);

  return <div>Loading...</div>;
};

export default Auth;
