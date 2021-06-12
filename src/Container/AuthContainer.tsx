import React from 'react';
import { RouteChildrenProps } from 'react-router';
import AuthRoute from '../Routes/AuthRoute';
const AuthContainer = (props: RouteChildrenProps) => {
  return (
    <AuthRoute {...props}/>
  );
}

export default AuthContainer;
