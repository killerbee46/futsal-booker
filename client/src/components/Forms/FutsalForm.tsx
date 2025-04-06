import React, { useEffect } from 'react'
import { Button, Col, Flex, Form, Input, Row, Select, Typography, message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQuery } from "@tanstack/react-query"
import { createFutsal, getFutsal, updateFutsal } from '../../api/FutsalApi'
import { useParams, useNavigate } from 'react-router-dom'
import FileUpload from '../FileUpload/FileUpload'
import { getUsersByRole } from '../../api/UserApis'

const FutsalForm = ({ update }: any) => {
  const [form] = useForm()
  const { id } = useParams()
  const navigate = useNavigate()
  const { data } = useQuery({
    queryKey: ['futsal', id], queryFn: getFutsal
  })

  const { data: users, isFetching:loading } = useQuery({
    queryKey: ['futsal', 2], queryFn: getUsersByRole
  })

  const options = users?.data?.users?.map((u: any) => ({
    label: u?.name, value: u?._id
  }))

  const futsal = data?.data?.futsal

  const { mutate: submit, isPending } = useMutation({
    mutationFn: update ? updateFutsal : createFutsal,
    onSuccess: async (data: any) => {
      message.success(data?.data?.message)
      navigate('/dashboard/futsals')
    },
    onError: (error) => {
      // An error happened!
      message.error(error.message)
    },
  })

  const onFinish = (values: any) => {
    if (update) {
      submit({ ...values, id: futsal?._id })
    } else {
      submit(values)
    }
  }

  useEffect(() => {
    form.setFieldsValue({
      ...futsal,
      owner:futsal?.owner?._id
    })
  }, [data])
  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 0 }}>{
        update ? futsal?.name : "Add Futsal"
      }</Typography.Title>
      <Form form={form} onFinish={onFinish} layout='vertical'>
        <FileUpload loading={update && loading} defaultImage={futsal?.image} name='image' form={form} />
        <Row gutter={30}>
          <Col span={12}>
            <Form.Item label="Name of Futsal" name={'name'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Owner" name={'owner'}>
              <Select placeholder={'Select Owner'} options={options} />
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
      </Col>
      <Col span={24}>
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