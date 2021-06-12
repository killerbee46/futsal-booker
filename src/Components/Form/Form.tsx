import { Button, Card, Col, Form, Image, Input, Row, Space, Typography } from 'antd';
import Logo from '../Logo/Logo';
import './Form.css';

export default function Forms(props:any){
    return( 
      <div style={{padding:'20px'}}>
        <Card className='form-card'>
            <Form className='form'>
              <Space direction='vertical' style={{width:'100%'}}>
                  <Row style={{justifyContent:"center"}}>
              <Logo/>
                  </Row>
              {/* <Typography.Title level={3} className='brand_name'>Company Name</Typography.Title> */}
              {props.children}

              </Space>
            </Form>
  </Card>
  </div>
    );
}