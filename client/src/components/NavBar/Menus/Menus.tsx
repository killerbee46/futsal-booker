import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'
import { FileOutlined, HomeOutlined } from '@ant-design/icons/lib/icons'
import { localUser } from '../../../api/AuthApi'

const Menus = () => {
  const user = localUser()

const [hide,setHide] = useState(true)

useEffect(()=> {
setHide(Object.keys(user).length === 0)
},[user])

const menuItems = [
  {
    title:"Home",
    icon:<HomeOutlined />,
    path:'/'
  },
  {
    title:"Futsals",
    icon:<FileOutlined />,
    path:'/futsals'
  },
  {
    title:"Bookings",
    icon:<FileOutlined />,
    path:'/bookings',
    hide:hide
  },
  // {
  //   title:"Shop",
  //   icon:<TagOutlined style={{transform:'scaleX(-1)'}} />,
  //   path:'/bet'
  // },
  // {
  //   title:"History",
  //   icon:<ClockCircleOutlined />,
  //   path:'/'
  // },
]
  return (
    <div className='menu'>
      {
        menuItems?.map((menuItems:any)=> {
          return <Link hidden={!!menuItems.hide} to={menuItems?.path} className='menuItems'>{menuItems?.title}</Link>
        })
      }
    </div>
  )
}

export const MobileMenus = () => {
  return (
    <div className='mobileMenu'>
      {
        // menuItems
        Array()?.map((menuItems:any)=> {
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