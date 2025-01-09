import { Button, Col, Flex, Row } from 'antd'
import React from 'react'

const TimeTable = () => {
  return (
    <div>
        <Row>
            {
                Array(12).fill(null).map(()=>{
                    return <Col lg={6} style={{border:'1px solid black'}}>
                    <Flex align='center' justify='center' style={{padding:'10px 20px'}}>
                        <Button>6 - 7</Button>
                    </Flex>
            </Col>
                })
            }
        </Row>
    </div>
  )
}

export default TimeTable