import React, { useEffect } from 'react'
import {Button, Col, Flex, Form, Image, Input, Radio, Row, Typography} from 'antd' 
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from 'react-router-dom'
import { getUser } from '../../../api/UserApis'
import { createUser, updateUser } from '../../../api/UserApis'
// import FileUpload from '../FileUpload/FileUpload'

const UserForm = ({update}:any) => {
  const [form] = useForm()
  const {id} = useParams()

  console.log(id,"user id")

  const {mutate:register, isPending:loading} = useMutation({
    mutationFn:update ? updateUser : createUser
  })

  const {data } = useQuery({
    queryKey:['futsal',id], queryFn:getUser,enabled:!!id
})

  const onFinish = (values:any) => {
    delete values['confirm-password']
    update ?
    register(values) :
    register({...values,password:"password"})
  }
  const user = data?.data?.user

  useEffect(()=> {
    if (data) {
     form.setFieldsValue(user) 
    }
  },[data])

  const userImage = "https://imgs.search.brave.com/-E39lOB7yNIc5Ymx_yPhHhA1zFySZt_DSF-KSsl_mOQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg0LzY3LzE5/LzM2MF9GXzg0Njcx/OTM5X2p4eW1vWVpP/OE9lYWNjM0pSQkRF/OGJTWEJXajBaZkE5/LmpwZw"
  return (
    <>
        {
          update ?
          <Typography.Title level={4}>{user?.name}</Typography.Title> :
          <Typography.Title level={4}>{"Add User"}</Typography.Title>
        }
        <Image src={userImage} width={150} preview={false} style={{aspectRatio:"1/1"}} />
    <Form form={form} onFinish={onFinish} layout='vertical' encType='multipart/form-data'>
      {/* <FileUpload module={"user"} type={"image"} /> */}
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
        <Button loading={loading} type='primary' htmlType='submit'>
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