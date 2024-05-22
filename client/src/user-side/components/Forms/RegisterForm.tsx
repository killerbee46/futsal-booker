import React, { useEffect } from 'react'
import {Button, Col, Flex, Form, Input, Radio, Row, Typography} from 'antd' 
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQuery } from "@tanstack/react-query"
import { requestRegister } from '../../../api/AuthApi'
import { useParams } from 'react-router-dom'
import { getUser } from '../../../api/UserApis'
import { createUser, updateUser } from '../../../../../server/controllers/userController'

const RegisterForm = ({registerForm, update}:any) => {
  const [form] = useForm()
  const {id} = useParams()

  const {mutate:register, isPending:loading, error} = useMutation({
    mutationFn:registerForm ? requestRegister : update ? updateUser : createUser
  })

  const {data } = useQuery({
    queryKey:['futsal',id], queryFn:getUser, enabled:!registerForm
})

  const onFinish = (values:any) => {
    delete values['confirm-password']
    registerForm ?
    register(values) :
    update ?
    register(values) :
    register({...values,password:"password"})
  }

  useEffect(()=> {
    if (id) {
     form.setFieldsValue(data) 
    }
  },[id])
  return (
    <>
    {
      !registerForm && 
      <Typography.Title level={4}>
        {
          update ?
          "Edit User" :
          "Add User"
        }
      </Typography.Title>
    }
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
          {
            registerForm ?
            "Register":
            update ?
            "Update":
            "Create"
          }
        </Button>
        <Typography.Link hidden={!registerForm} href='/auth/login'>Already Registered?</Typography.Link>
        </Flex>
      </Form.Item>
    </Form>
    </>
  )
}

export default RegisterForm