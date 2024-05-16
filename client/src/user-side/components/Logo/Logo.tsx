import { Image, Typography } from 'antd'
import React from 'react'
import logo from '/logo.png'
import './Logo.scss'
import { Link } from 'react-router-dom'

const Logo = ({withText, dark}:any) => {
  return (
      <Link to={'/'} className='logo__container'>
        <Image src={logo} preview={false} height={50} width={50} />
        <Typography.Text hidden={!withText} className={`logo__name ${dark && "dark"}`}>
            Circle Bet
        </Typography.Text>
    </Link>
  )
}

export default Logo