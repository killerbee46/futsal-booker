import { Card, Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const AuthLayout = (props:any) => {
    const {children, type} = props
  return (
    <Row style={{height:"100vh", overflowY:'auto'}} className='py-10 bg-cover object-cover object-center bg-[url(/auth-cover.jpg)]' justify={'center'} align={"middle"} >
        <Col lg={8}>
        <Card variant={'borderless'} className='bg-[#ffffffc9]' style={{boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'}} title={<>{type} | <Link to={'/'}>Futsal Online</Link></>}>
            {children}
        </Card>
        </Col>
    </Row>
  )
}

export default AuthLayout