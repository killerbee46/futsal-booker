import { Button, Card, Col, Form, Image, Input, Row, Space, Typography } from 'antd';

export default function UserForm(props:any){
    return(
        <Card className='form-card'>
            <Form className='form'>
              <Space direction='vertical' style={{width:'100%'}}>
                  <Row style={{justifyContent:"left"}}>
              {props.children.title}
                  </Row>
              {/* <Typography.Title level={3} className='brand_name'>Company Name</Typography.Title> */}
              {props.children}

              </Space>
            </Form>
  </Card>
    )
}