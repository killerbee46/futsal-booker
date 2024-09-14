import React, { useEffect } from 'react'
import {Button, Col, Flex, Form, Input, Row, Typography} from 'antd' 
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQuery } from "@tanstack/react-query"
import { createFutsal, getFutsal, updateFutsal } from '../../../api/FutsalApi'
import { useParams, useNavigate } from 'react-router-dom'

const FutsalForm = ({update}:any) => {
  const [form] = useForm()
  const {id} = useParams()
  const navigate = useNavigate()
  const {data } = useQuery({
      queryKey:['futsal',id], queryFn:getFutsal
  })

  const {mutate:submit, isPending:loading, error} = useMutation({
    mutationFn:update?updateFutsal:createFutsal
  })

  const onFinish = (values:any) => {
    if (update) {
      submit({...values,id:data?.data?.futsal?._id})
    } else {
      submit(values)
    }
  }

  useEffect(()=> {
form.setFieldsValue(data?.data?.futsal)
  },[data])
  return (
    <>
    <Typography.Title level={4} style={{marginTop:0, marginBottom:20}}>{
      update ? data?.data?.futsal?.name : "Add Futsal"
    }</Typography.Title>
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
        <Button type='primary' htmlType='submit'>{update ? "Update" : "Create"}</Button>
        {/* <Typography.Link href='/auth/login'>Already Registered?</Typography.Link> */}
        </Flex>
      </Form.Item>
        </Col>
      </Row>
    </Form>
    </>
  )
}

export default FutsalForm