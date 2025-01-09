import React, { useEffect } from 'react'
import {Button, Col, Flex, Form, Input, Radio, Row, Typography, message} from 'antd' 
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../../api/UserApis'
import { createUser, updateUser } from '../../api/UserApis'
import FileUpload from '../FileUpload/FileUpload'

const UserForm = ({update}:any) => {
  const [form] = useForm()
  const {id} = useParams()
  const navigate = useNavigate()

  const {mutate:register, error} = useMutation({
    mutationFn:update ? updateUser : createUser,
    onSuccess:(res)=> {
      {
        !update && 
        navigate('/dashboard/users')
      }
      message.success(`User ${update ? "Updated" : "Created"} successfully`)
    },
    onError:(error:any)=> {
      message.error(error?.response?.data?.message)
    }
  })
  
  const {data } = useQuery({
    queryKey:['futsal',id], queryFn:getUser, enabled:!!id
  })
  const user = data?.data?.user

  const onFinish = (data:any) => {
    delete data['confirm-password']
    
    const values = {
      ...data,
      photo:user?.photo || data?.photo?.file,
      status:user?.status || "pending"
    }
    update ?
    register({...values,
      id:id}) :
    register({...values,password:"password"})
  }

  useEffect(()=> {
    if (data) {
     form.setFieldsValue(user) 
    }
  },[id,data])
  return (
    <>
        {
          update ?
          <Typography.Title level={4}>{user?.name}</Typography.Title> :
          <Typography.Title level={4}>{"Add User"}</Typography.Title>
        }
    <Form form={form} onFinish={onFinish} layout='vertical'>
      <FileUpload name='image' form={form} />
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