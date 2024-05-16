import React from 'react'
import "./UserDropdown.scss"
import { DownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space, Typography } from 'antd';
import { logout, userData } from '../../utils/loginHandler';

const items: MenuProps['items'] = [
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
      <a onClick={logout}>
        Logout
      </a>
    )
  }
];

const userName = userData?.email?.split("@")[0]

const UserDropdown = () => (
  <Dropdown menu={{ items }}>
      <Typography.Link>
      <Space>
        <Avatar icon={<UserOutlined />} size={30} />
        <div style={{textTransform:"capitalize"}}>{userName}</div>
        <DownOutlined />
      </Space>
      </Typography.Link>
  </Dropdown>
);

export default UserDropdown;