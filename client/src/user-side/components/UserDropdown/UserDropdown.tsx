import React from 'react'
import "./UserDropdown.scss"
import { DownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space, Typography } from 'antd';
import { getUser, requestLogout } from '../../../api/AuthApi';

const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: (
      <a href="/dashboard">
        Dashboard
      </a>
    ),
  },
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
];

const UserDropdown = () => {
  const user = getUser()
  return (
  <Dropdown menu={{ items }}>
      <Typography.Link>
      <Space>
        <Avatar icon={<UserOutlined />} size={30} />
        <div style={{textTransform:"capitalize"}}>{user?.name}</div>
        <DownOutlined />
      </Space>
      </Typography.Link>
  </Dropdown>
)
}

export default UserDropdown;