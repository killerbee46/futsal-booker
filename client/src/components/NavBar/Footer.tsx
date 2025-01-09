import { Affix, Col, Row } from 'antd'
import React from 'react'
import { MobileMenus } from './Menus/Menus'
import { BrowserView, MobileView } from 'react-device-detect'

const Footer = () => {
  return (
    <>
    <MobileView>
      <Affix offsetBottom={0}>
        <Row className='navbar'>
        <Col sm={24} xs={24} md={0} lg={0} xxl={0}>
            <MobileMenus />
        </Col>
    </Row>
    </Affix>
    </MobileView>
    <BrowserView>
    <div style={{background:'transparent'}}></div>
    </BrowserView>
    </>
    
  )
}

export default Footer