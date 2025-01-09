import React, {  } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Container from '../../Layouts/Container'
import { useForm } from 'antd/es/form/Form'

const Home = () => {
  const [form] = useForm()
  return (
    <MainLayout >
        <Container>
            Home
        </Container>
    </MainLayout>
  )
}

export default Home