import React from 'react'
import "./UserDropdown.scss"
import { DownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space, Typography } from 'antd';
import { localUser, requestLogout } from '../../api/AuthApi';

const user = localUser()

const items: MenuProps['items'] = (user?.role != 0 ? [  {
  key: 'dashboard',
  label: (
    <a href="/dashboard">
      Dashboard
    </a>
  )
}]: []).concat([
  {
    key: 'profile',
    label: (
      <a href="/profile">
        Profile
      </a>
    ),
  },
  {
    key: 'logout',
    label: (
      <a onClick={requestLogout}>
        Logout
      </a>
    )
  }
]);

const UserDropdown = () => {
  const user = localUser()
  return (
  <Dropdown menu={{ items }}>
      <Typography.Link style={{color:'white'}}>
      <Space>
        <Avatar icon={<UserOutlined />} size={30} />
        <div style={{textTransform:"capitalize"}}>{user?.name}</div>
      </Space>
      </Typography.Link>
  </Dropdown>
)
}

export default UserDropdown;