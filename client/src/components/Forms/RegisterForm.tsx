import React from 'react'
import {Button, Flex, Form, Input, Radio, Typography} from 'antd' 
import { useForm } from 'antd/es/form/Form'
import { useMutation } from "@tanstack/react-query"
import { requestRegister } from '../../api/AuthApi'
import { createUser, updateUser } from '../../api/UserApis'

const RegisterForm = ({registerForm, update}:any) => {
  const [form] = useForm()

  const {mutate:register, isPending:loading, error} = useMutation({
    mutationFn:registerForm ? requestRegister : update ? updateUser : createUser
  })

  const onFinish = (values:any) => {
    delete values['confirm-password']
    register(values)
  }
  return (
    <>
    <Form form={form} onFinish={onFinish} layout='vertical'>
        <Form.Item label="Full Name" name={'name'}>
        <Input />
      </Form.Item>
        <Form.Item label="Email" name={'email'}>
        <Input />
      </Form.Item>
        <Form.Item label="Phone" name={'phone'}>
        <Input />
      </Form.Item>
        <Form.Item label="Address" name={'address'}>
        <Input />
      </Form.Item>
        <Form.Item label="Password" name={'password'}>
        <Input />
      </Form.Item>
      <Form.Item label="Confirm Password" name={'confirm-password'}>
        <Input />
      </Form.Item>
      <Form.Item label="Role" name={'role'}>
        <Radio.Group>
          <Radio value={"1"}>Player</Radio>
          <Radio value={"2"}>Futsal Owner</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Flex justify='space-between'>
        <Button type='primary' htmlType='submit'>
          Register
        </Button>
        <Typography.Link href='/auth/login'>Already Registered?</Typography.Link>
        </Flex>
      </Form.Item>
    </Form>
    </>
  )
}

export default RegisterForm