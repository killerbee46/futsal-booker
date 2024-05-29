import { Button, Col, Row, Space } from 'antd'
import React, {  } from 'react'
import Logo from '../Logo/Logo'
import Menus from './Menus/Menus'
import './NavBar.scss'
import AuthModal from '../AuthModal/AuthModal'
import AuthDrawer from '../AuthDrawer/AuthDrawer'
import { BrowserView, MobileView } from 'react-device-detect'
import { useNavigate } from 'react-router-dom'
import UserDropdown from '../UserDropdown/UserDropdown'
import { getToken } from '../../../api/AuthApi'

const NavBar = () => {
  const token = getToken()
  const navigate = useNavigate()
  const ref = window.location.pathname

  const openModal = (type: string) => {
navigate(`/auth/${type}?ref=${ref}`)
    // searchParams.set('auth', type)
    // setSearchParams(searchParams)
  }

  return (
    <>
      <Row className='navbar' align={'middle'}>
        <Col lg={12} xl={12} xxl={12} md={12} sm={0} xs={0}>
          <Logo withText dark />
        </Col>
        <Col lg={0} xl={0} xxl={0} md={0} sm={8} xs={8}>
          <Logo />
        </Col>
        <Col sm={14} xs={14} md={12}>
          <Row align={"middle"} style={{ textAlign: "end" }}>
            <Col xs={0} sm={0} md={14} lg={14} xl={14} xxl={14}>
              <Menus />
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
              {
                token && token !=="" ?
                  <UserDropdown />
                  :
                  <Space size={'middle'}>
                    <Button onClick={() => openModal('login')} className='button primary large' style={{ background: '#2BACEE' }}>
                      Login
                    </Button>
                    <Button className='button primary large' onClick={() => openModal('register')}>
                      Sign Up
                    </Button>
                  </Space>
              }
            </Col>
          </Row>
        </Col>
      </Row>
      <BrowserView>
        <AuthModal />
      </BrowserView>
      <MobileView>
        <AuthDrawer />
      </MobileView>
    </>
  )
}

export default NavBar