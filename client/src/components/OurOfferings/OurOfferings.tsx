import React from 'react'
import MainContainer from '../../user-side/Maincontainer/Maincontainer'
import OOC from '/offering-cover.png'
import VenueIcon from '/venue-icon.png'
import PlayerIcon from '/player-icon.png'
import { Col, Image, List, Row, Typography } from 'antd'
import SectionTitle from '../SectionTitle/SectionTitle'

const OurOfferings = () => {
  return (
    <MainContainer className={`py-5 my-5 md:py-10 lg:py-20 bg-[#ffffffe5] bg-blend-overlay bg-[url(/offering-cover.png)] md:bg-none md:bg-transparent bg-cover object-cover object-center`}>
        <Row gutter={40} justify={'center'} align={'middle'}>
            <Col xs={0} md={12} className='p-10'>
            <Image preview={false} src={OOC} />
            </Col>
            <Col xs={20} sm={18} md={12} lg={12}>
            <Row gutter={20}>
                <Col span={24}>
                <SectionTitle subTitle="Our Offerings" description="Sports focused recreational experiences" />
                </Col>
                <Col span={12}>
                <Typography.Paragraph className='!font-bold uppercase'>For Venues</Typography.Paragraph>
                <Image width={50} height={50} src={VenueIcon} />
                <List>
                  <List.Item>Manage Venue Bookings</List.Item>
                  <List.Item>Multi Venue Management</List.Item>
                  <List.Item>Digital record of data</List.Item>
                </List>
                </Col>
                <Col span={12}>
                <Typography.Paragraph className='!font-bold uppercase'>For Players</Typography.Paragraph>
                <Image width={50} height={50} src={PlayerIcon} />
                <List>
                  <List.Item>Book futsal online</List.Item>
                  <List.Item>Booking history</List.Item>
                  <List.Item>Real time venue updates</List.Item>
                </List>
                </Col>
            </Row>
            </Col>
        </Row>
    </MainContainer>
  )
}

export default OurOfferings