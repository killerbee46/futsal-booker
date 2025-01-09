import React from 'react'
import DashboardWelcomeCard from './DashboardWelcomeCard'
import ReportChart from '../ReportChart/ReportChart'
import { Col, Row } from 'antd'
import UserRequestsCard from '../UserRequestsCard/UserRequestsCard'

const DashboardWelcome = () => {
  return (
    <div>
        <Row gutter={30}>
            <Col span={12}>
            <DashboardWelcomeCard />
            <ReportChart />
            </Col>
            <Col span={12}>
            <UserRequestsCard />
            </Col>
        </Row>
        
    </div>
  )
}

export default DashboardWelcome