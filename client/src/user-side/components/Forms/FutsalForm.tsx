import React from 'react'
import {Button, Col, Flex, Form, Input, Radio, Row, Typography} from 'antd' 
import { useForm } from 'antd/es/form/Form'
import { useMutation } from "@tanstack/react-query"
import { requestRegister } from '../../../api/AuthApi'
import { createFutsal } from '../../../api/FutsalApi'

const FutsalForm = () => {
  const [form] = useForm()

  const {mutate:submit, isPending:loading, error} = useMutation({
    mutationFn:createFutsal
  })

  const onFinish = (values:any) => {
    submit(values)
  }
  return (
    <Form form={form} onFinish={onFinish} layout='vertical'>
      <Row gutter={30}>
        <Col span={12}>
        <Form.Item label="Name of Futsal" name={'name'}>
        <Input />
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item label="Location" name={'location'}>
        <Input />
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item label="Google Map Location" name={'google_map_location_string'}>
        <Input />
      </Form.Item>
        </Col>
        <Col span={12}>
        
      {/* <Form.Item label="Email" name={'email'}>
        <Input />
      </Form.Item> */}
      <Form.Item label="Phone" name={'phone'}>
        <Input />
      </Form.Item>
      {/* <Form.Item label="Address" name={'address'}>
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
          <Radio value={"0"}>Player</Radio>
          <Radio value={"1"}>Futsal Owner</Radio>
        </Radio.Group>
      </Form.Item> */}
      <Form.Item>
        <Flex justify='flex-end'>
        <Button type='primary' htmlType='submit'>Create</Button>
        {/* <Typography.Link href='/auth/login'>Already Registered?</Typography.Link> */}
        </Flex>
      </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default FutsalForm