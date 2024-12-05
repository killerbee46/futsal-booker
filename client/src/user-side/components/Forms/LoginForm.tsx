import { useMutation } from '@tanstack/react-query'
import { Button, Flex, Form, Input, Typography, message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import { requestLogin, storeLogin } from '../../../api/AuthApi'
import { useNavigate, useSearchParams } from 'react-router-dom'

const LoginForm = () => {
  const [form] = useForm()
  const [searchParams] = useSearchParams()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const ref = searchParams.get('ref')
  const {mutate,isPending:loading} = useMutation({
    mutationFn:requestLogin,
    onSuccess: async(data, variables) => {
      await storeLogin(data)
      navigate(ref||"/")
      message.success("Successfully logged in !")
    },
    onError: (error:any) => {
      // An error happened!
      message.error(error?.response?.data?.message)
    },
    // onError(error:any) {
    //   setError(error?.response?.data?.message+ " !")
    // },
  })
  const onFinish = (values:any) => {
mutate(values)
  }

  return (
    <Form layout='vertical' form={form} onFinish={onFinish} >
      <Form.Item label="Email" name={"email"}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name={"password"}>
        <Input />
      </Form.Item>
      <Form.Item>
        {
          error && error !== "" &&
          <Typography.Paragraph type='danger'>{error}</Typography.Paragraph>
        }
      <Flex justify='space-between'>
        <Button loading={loading} type='primary' htmlType='submit'>Submit</Button>
        <Typography.Link href='/auth/register'>Don't have an account?</Typography.Link>
        </Flex>
      </Form.Item>
    </Form>
  )
}

export default LoginForm