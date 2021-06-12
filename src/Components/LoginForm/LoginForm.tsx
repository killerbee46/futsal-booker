import { Button, Col, Input, Row, Space } from "antd";

export default function LoginForm(){
    return(
    
        <Space direction='vertical' size='middle' style={{width:'100%'}}>
             <div>
             Email / Username 
              <Input className='loginemail'/>
             </div>
             <div>
             Password
              <Input.Password className='loginpassword' />
             </div>
              <Row justify='space-between' align="middle">
                  <Col span={10}><a href="/admin"><Button className='button' type='primary'>Login</Button></a></Col>
                  <Col span={10}><a href="/register">Don't have an account?</a>
              </Col>
              </Row>
              </Space>
        );
}