import { Card, Typography } from 'antd'
import React from 'react'
import { localUser } from '../../api/AuthApi'
import dayjs from 'dayjs'
import LiveClock from '../LiveClock/LiveClock'

const DashboardWelcomeCard = () => {
    const user = localUser()
  return (
    <div>
        <Card style={{width:300,background:'#69B168'}} className='card'>
            <Typography.Title level={4} style={{margin:"10px auto"}}>Welcome, </Typography.Title>
            <Typography.Title level={3} style={{margin:"10px auto"}}>{user?.name}</Typography.Title>
            <LiveClock />
        </Card>
    </div>
  )
}

export default DashboardWelcomeCard