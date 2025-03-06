import { DashboardOutlined, EnvironmentOutlined, UnorderedListOutlined, PlusOutlined, EditOutlined, FileOutlined, ClockCircleOutlined, TeamOutlined } from '@ant-design/icons';
import { MenuProps, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { localUser } from '../../api/AuthApi';

const user = localUser()

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const filteredDashMenu = () => {
    switch (user.role) {
        case 1:
            return [
                {
                    label:"Dashboard",key:"dashboard",icon:<DashboardOutlined />
                },
                {
                    label:"My Bookings",key:"dashboard/my-bookings",icon:<FileOutlined />
                },
            ]
            case 2:
                return [
                    {
                        label:"Dashboard",key:"dashboard",icon:<DashboardOutlined />
                    },
                    {
                        label:"My Futsal",key:"dashboard/my-futsal",icon:<ClockCircleOutlined />
                    },
                ]
                case 3:
                return [
                    {
                        label:"Dashboard",key:"dashboard",icon:<DashboardOutlined />
                    },
                    {
                        label:"Users",key:"dashboard/users",icon:<TeamOutlined />
                    },
                    {
                        label:"Futsals",key:"dashboard/futsals",icon:<EnvironmentOutlined />
                    },
                    {
                        label:"Bookings",key:"dashboard/bookings",icon:<UnorderedListOutlined />
                    },
                ]
        default:
            return []
    }
}
const items: MenuItem[] = filteredDashMenu()
const DashboardMenus = () => {
    const navigate = useNavigate()
    // const currentMenu = window.location.pathname.slice(1)
    const [currentMenu, setCurrentMenu] = useState('dashboard')
    const onMenuClick = (e) => {
        navigate(`/${e.key}`)
        setCurrentMenu(e.key)
      }
  return (
    <Menu selectedKeys={[location?.pathname?.slice(1)]} onClick={onMenuClick} theme="dark" defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
  )
}

export default DashboardMenus