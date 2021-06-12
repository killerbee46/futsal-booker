import { Button, Col, Input, Menu, Row, Space, Typography, Dropdown, Avatar  } from "antd";
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import MenuItem from "antd/lib/menu/MenuItem";
import Logo from "../Logo/Logo";
import './Header.css';


export default function Header(){

    const menu = (
        <Menu className="drop-menu" style={{marginTop:'-20px',width:'10vw'}}>
          <Menu.Item style={{fontSize:'1.2em'}}>
            <a rel="noopener noreferrer" href="/userprofile">
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
    return(
        <div className='nav'>
            <a href="/">
            <Logo/>
            </a>
            <Menu className='nav-menu'>
                <MenuItem><a href="/">Home</a></MenuItem>
                <MenuItem><a href="/about">About Us</a></MenuItem>
                <MenuItem><a href="/contact">Contact</a></MenuItem>
                <MenuItem><a href="/booking">Book Now</a></MenuItem>
            </Menu>
            <Menu className='auth-check'>
                <MenuItem><a href="/login">Login</a></MenuItem>
            </Menu>
            {/* <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" style={{color:"black"}} onClick={e => e.preventDefault()}>
                    <div style={{backgroundColor:'aquamarine',padding:10}}>
                    <Avatar icon={<UserOutlined/>} /> USERNAME
                    </div>
                    </a>
                </Dropdown> */}
            
        </div>
    );
}