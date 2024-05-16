import { Col, Row } from 'antd'
import React from 'react'

const Container = (props:any) => {
  return (
    <Row style={{padding:'10px 5%'}}>
        <Col span={24}>
            {props?.children}
        </Col>
    </Row>
  )
}

export default Container