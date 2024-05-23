import React, { useEffect } from 'react'
import {Button, Col, Flex, Form, Input, Radio, Row, Typography} from 'antd' 
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from 'react-router-dom'
import { getUser } from '../../../api/UserApis'
import { createUser, updateUser } from '../../../api/UserApis'

const UserForm = ({update}:any) => {
  const [form] = useForm()
  const {id} = useParams()

  console.log(id,"user id")

  const {mutate:register, isPending:loading, error} = useMutation({
    mutationFn:update ? updateUser : createUser
  })

  const {data } = useQuery({
    queryKey:['futsal',id], queryFn:getUser
})

  const onFinish = (values:any) => {
    delete values['confirm-password']
    update ?
    register(values) :
    register({...values,password:"password"})
  }
  const user = data?.data?.user

  useEffect(()=> {
    if (id) {
     form.setFieldsValue({
      ...user
     }) 
    }
  },[id])
  return (
    <>
    {
      <Typography.Title level={4}>
        {
          update ?
          user?.name :
          "Add User"
        }
      </Typography.Title>
    }
    <Form form={form} onFinish={onFinish} layout='vertical'>
      <Row gutter={30}>
        <Col span={12}>
        <Form.Item label="Full Name" name={'name'}>
        <Input />
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item label="Email" name={'email'}>
        <Input />
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item label="Phone" name={'phone'}>
        <Input />
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item label="Address" name={'address'}>
        <Input />
      </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Role" name={'role'}>
        <Radio.Group>
          <Radio value={1}>Player</Radio>
          <Radio value={2}>Futsal Owner</Radio>
            <Radio value={3}>Super Admin</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Flex justify='flex-end'>
        <Button type='primary' htmlType='submit'>
          {
            update ?
            "Update":
            "Create"
          }
        </Button>
        </Flex>
      </Form.Item>
    </Form>
    </>
  )
}

export default UserForm