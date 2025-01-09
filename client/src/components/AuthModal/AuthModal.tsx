import { Modal } from 'antd'
import React from 'react'
import './AuthModal.scss'
import { CloseOutlined } from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom'

const AuthModal = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const closeModal = () => {
    searchParams.delete('auth')
    setSearchParams(searchParams)
  }
    const authType = searchParams.get('auth')
  return (
    <Modal open={!!authType} className='auth__modal' footer={null} onCancel={closeModal} closeIcon={<CloseOutlined style={{color:'#1186DC'}} />}>
        {/* <Logo withText dark />
        {
            authType === 'login' &&
            <LoginForm closeModal={closeModal} />
        }
        {
            authType === 'register' &&
            <RegisterForm closeModal={closeModal} />
        } */}
    </Modal>
  )
}

export default AuthModal