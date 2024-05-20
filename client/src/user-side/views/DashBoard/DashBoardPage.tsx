import React from 'react'
import DashboardLayout from '../../Layouts/DashboardLayout'
import { getUser } from '../../../api/AuthApi'
import { Typography } from 'antd'

const DashBoardPage = () => {
    const user = getUser()
  return (
    <DashboardLayout>
        <Typography.Title level={3}>Welcome {user?.name}, as a {user?.role === 1 ? " Player " : user?.role === 2 ? " Futsal Owner " : user?.role === 3 ? " Super Admin " : " Intruder"} you can navigate to provided pages</Typography.Title>
    </DashboardLayout>
  )
}

export default DashBoardPage