import React, { useEffect } from 'react'
import { Button, Col, Flex, Form, Input, InputNumber, Row, Select, Typography, message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQuery } from "@tanstack/react-query"
import { createFutsal, getFutsal, updateFutsal } from '../../api/FutsalApi'
import { useParams, useNavigate } from 'react-router-dom'
import FileUpload from '../FileUpload/FileUpload'
import { getUsersByRole } from '../../api/UserApis'
import MultiFileUpload from '../FileUpload/MultiFileUpload'

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
        <Flex gap={30} align='center'>
        <FileUpload label="" loading={update && loading} defaultImage={futsal?.image} name='image' form={form} />
        <MultiFileUpload name={'images'} defaultValue={futsal?.images} form={form} loading={loading} />
        </Flex>
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

            <Form.Item rules={[
              {required:true, message:'Rate is required'},
              {pattern:/^\\d{3}|[1-2][0-9]{1,3}|[1-9][0-9]|[0-9]$/, message:"Rate must be number" }
              ]} label="Rate" name={'rate'}>
        <Input />
      </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="No. of Venues" name={'venues'} rules={[
              {pattern:/^\\d{3}|[1-2][0-9]{1,3}|[1-9][0-9]|[0-9]$/, message:"No. of venues must be number" }
              ]} >
        <Input className='w-full' />
      </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Category" name={'category'}>
        <Select mode='tags' options={[
          {label:"5 A Side", value:'5 a side'},
          {label:"7 A Side", value:'7 a side'},
        ]} />
      </Form.Item>
      </Col>
      <Col span={12}>
            <Form.Item label="Phone" name={'phone'}>
              <Input />
            </Form.Item>
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