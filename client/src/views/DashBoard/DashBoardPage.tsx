import React from 'react'
import DashboardLayout from '../../Layouts/DashboardLayout'
import { localUser } from '../../api/AuthApi'
import { Typography } from 'antd'
import DashboardWelcome from '../../components/DashboardWelcome/DashboardWelcome'

const DashBoardPage = () => {
    const user = localUser()
  return (
    <DashboardLayout>
        <DashboardWelcome />
    </DashboardLayout>
  )
}

export default DashBoardPage