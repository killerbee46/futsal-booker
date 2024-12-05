import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import RegisterForm from '../../components/Forms/RegisterForm'

const Register = () => {
  return (
    <AuthLayout type={"Register"}>
        <RegisterForm />
    </AuthLayout>
  )
}

export default Register