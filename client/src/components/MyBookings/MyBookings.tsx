import { Table, Tabs, Typography } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import React from 'react'

const MyBookings = () => {
  return (
    <div>
    <Typography.Title level={3}>MyBookings</Typography.Title>
    <Tabs>
        <TabPane tab="All" key={'all'} />
    </Tabs>
    <Table />
    </div>
  )
}

export default MyBookings