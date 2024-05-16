import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import LoginForm from '../../components/Forms/LoginForm'

const Login = () => {
  return (
    <AuthLayout type="Login">
<LoginForm />
    </AuthLayout>
  )
}

export default Login