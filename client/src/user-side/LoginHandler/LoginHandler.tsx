import { Button, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { getToken } from '../../api/AuthApi'
import { useNavigate } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import AuthModal from '../../components/AuthModal/AuthModal'
import AuthDrawer from '../../components/AuthDrawer/AuthDrawer'
import UserDropdown from '../../components/UserDropdown/UserDropdown'

const LoginHandler = () => {
  const token = getToken()
  const navigate = useNavigate()
  const ref = window.location.pathname

  const openModal = (type: string) => {
    navigate(`/auth/${type}?ref=${ref}`)
    // searchParams.set('auth', type)
    // setSearchParams(searchParams)
  }
  return (
    <div>
      {
        token && token !== "" ?
          <UserDropdown />
          :

          <Space>
            <Button type='primary' onClick={() => openModal('login')}>Login</Button>
            <Button type='default' onClick={() => openModal('register')}>Register</Button>
          </Space>
      }
      <BrowserView>
        <AuthModal />
      </BrowserView>
      <MobileView>
        <AuthDrawer />
      </MobileView>
    </div>
  )
}

export default LoginHandler