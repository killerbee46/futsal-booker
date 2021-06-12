import { Button, Col, Input, Row, Space } from "antd";

export default function RegistrationForm(){
    return(
        <Space direction='vertical' size='middle'>
        <Row gutter={30}>
                <Col span={12}>
                  First Name* 
                  <Input className='firstname'/>
                </Col>
                <Col span={12}>
                Last Name* 
                  <Input className='lastname'/>
                </Col>
              </Row>
             <div>
             Email Address* 
              <Input className='email'/>
             </div>
             <div>
             Password
              <Input.Password className='password' />
             </div>
              <div>
              Confirm Password 
              <Input.Password className='password' /> 
              </div>
              <Row justify='space-between' align="middle">
                  <Col span={10}><Button className='button' type='primary'>Register</Button></Col>
                  <Col span={10}><a href="/login">Already have an account?</a>
              </Col>
              </Row>
              </Space>
    );
}