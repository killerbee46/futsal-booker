import { Card, Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const AuthLayout = (props:any) => {
    const {children, type} = props
  return (
    <Row style={{height:"100vh", overflowY:'auto'}} justify={'center'} align={"middle"} >
        <Col lg={8}>
        <Card title={<>{type} | <Link to={'/'}>Futsal Online</Link></>}>
            {children}
        </Card>
        </Col>
    </Row>
  )
}

export default AuthLayout