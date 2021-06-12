import { Button, Col, Input, Menu, Row, Space, Typography, Dropdown, Avatar  } from "antd";
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

export default function AdminHeader() {

    const menu = (
        <Menu className="drop-menu" style={{marginTop:'-20px',width:'10vw'}}>
          <Menu.Item style={{fontSize:'1.2em'}}>
            <a rel="noopener noreferrer" href="/user-profile">
            <UserOutlined />Profile
            </a>
          </Menu.Item>
          <Menu.Item style={{fontSize:'1.2em'}}>
            <a rel="noopener noreferrer" href="/logout">
            <LogoutOutlined />Logout
            </a>
          </Menu.Item>
          </Menu>
      );
    return (
        <Row style={{ height: '10vh', display: "flex", width: '100vw', paddingLeft: '30px', paddingRight: '30px',backgroundColor: 'black' }} align='middle' justify='space-between' className='admin-nav'>
            <Col>
                <a href="/admin" className='dashboard-title'><Typography.Title level={3} style={{color:'aliceblue'}}>Dashboard</Typography.Title></a>
            </Col>
            <Col>
                <Input.Search placeholder='Search...' className='search' style={{ width: '30vw' }} />
            </Col>
            <Col>
    
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" style={{color:"aliceblue"}} onClick={e => e.preventDefault()}>
                    <div style={{backgroundColor:'navy',padding:10}}>
                    <Avatar size={40} icon={<UserOutlined/>} /> USERNAME
                    </div>
                    </a> 
                </Dropdown>
                
            </Col>
        </Row>
    );
}