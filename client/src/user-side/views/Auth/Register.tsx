import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import UserForm from '../../components/Forms/UserForm'

const Register = () => {
  return (
    <AuthLayout type={"Register"}>
        <UserForm registerForm />
    </AuthLayout>
  )
}

export default Register