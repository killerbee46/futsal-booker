import React, { useState } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Container from '../../Layouts/Container'
import { useMutation } from "@tanstack/react-query"
import { Form, Input } from 'antd'
import { uploadFile } from '../../../api/UploadApi'

const Home = () => {
  const {mutate} = useMutation({
    mutationFn:uploadFile
  })
  const onFinish = (values:any) => {
console.log(values)
  }
  return (
    <MainLayout >
        <Container>
        <Form onFinish={onFinish}>
          <Form.Item name={'file'} label="File">
            <Input type='file' />
          </Form.Item>
        </Form>
        </Container>
    </MainLayout>
  )
}

export default Home