import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'
import { ClockCircleOutlined, FileOutlined, HomeOutlined, TagOutlined } from '@ant-design/icons/lib/icons'
import { Typography } from 'antd'

const menuItems = [
  {
    title:"Home",
    icon:<HomeOutlined />,
    path:'/'
  },
  {
    title:"My Bets",
    icon:<FileOutlined />,
    path:'/my-bets'
  },
  {
    title:"Bet Slip",
    icon:<TagOutlined style={{transform:'scaleX(-1)'}} />,
    path:'/bet'
  },
  {
    title:"History",
    icon:<ClockCircleOutlined />,
    path:'/'
  },
]

// #1186DC signu button color

const Menus = () => {
  return (
    <div className='menu'>
      {
        menuItems?.map((menuItems:any)=> {
          return <Link to={menuItems?.path} className='menuItems'>{menuItems?.title}</Link>
        })
      }
    </div>
  )
}

export const MobileMenus = () => {
  return (
    <div className='mobileMenu'>
      {
        menuItems?.map((menuItems:any)=> {
          return <Link to={menuItems?.path} className='menuItems'>
              {menuItems?.icon}
            <p>
            {menuItems?.title}
            </p>
            </Link>
        })
      }
    </div>
  )
}

export default Menus