import { Button, Card, Col, Form, Image, Input, Row, Space, Typography } from 'antd';
import UserForm from './FromTemplate';

export default function AddUser(){
    return(
        <UserForm>
        <Space direction='vertical' size='middle' style={{width:'100%'}}>
             <div>
             Fullname
              <Input className='add-fullname'/>
             </div>
             <div>
            Email
              <Input className='add-email' />
             </div>
             <div>
            Contact
              <Input className='add-contact' />
             </div>
             <div>
            Address
              <Input className='add-address' />
             </div>
              <Row justify='space-between' align="middle">
                  <Col span={10}><a href="#"><Button className='button' type='primary'>Edit</Button></a></Col>
                  <Col span={10}><Button className='button' htmlType='reset' type='primary'>Cancel</Button>
              </Col>
              </Row>
              </Space>
              </UserForm>
    );
}