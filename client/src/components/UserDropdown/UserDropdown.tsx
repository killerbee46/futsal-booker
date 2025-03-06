import React from 'react'
import "./UserDropdown.scss"
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space, Typography } from 'antd';
import { localUser, requestLogout } from '../../api/AuthApi';
import getImage from '../../utils/getImage';

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
  const defaultImage = "https://imgs.search.brave.com/L8g0q2VTDqc0PX3hfAVBBNx6gKLd9JE0Gld8jH4BjvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjE5/NDAwODEwL3Bob3Rv/L21yLXdoby5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aGFy/VHhXX0lSbDA2Q25o/LTRrbkNudHh3WWlx/V282eWlBeEpUcld5/U0ppRT0"
  return (
    <div className='user_dropdown'>
  <Dropdown menu={{ items }}>
      <Typography.Link style={{color:'white'}}>
      <Space>
        <Avatar src={user?.image && user?.image !== "" ? getImage(user?.image): defaultImage} size={30} />
        <div style={{textTransform:"capitalize"}}>{user?.name}</div>
      </Space>
      </Typography.Link>
  </Dropdown>
  </div>
)
}

export default UserDropdown;