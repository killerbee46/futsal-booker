import { Image, Typography } from 'antd'
import React from 'react'
import logo from '/futsal-online.png'
import smallLogo from '/logo.png'
import './Logo.scss'
import { Link } from 'react-router-dom'

const Logo = ({withText, width}:any) => {
  return (
      <Link to={'/'} className='logo__container'>
        <Image src={withText ? logo : smallLogo} preview={false} height={ width ? "" : 50} width={width || 100} />
    </Link>
  )
}

export default Logo