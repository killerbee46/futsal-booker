import Map1 from '../../../components/Map/Map1/Map1'
import { Row, Col, Image } from 'antd'
import React from 'react'
import { SectionDataTypes } from '../Section.types'
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'
import getImageUrl from '../../../utilFunctions/getImageUrl'

const EventDetailSection = ({venue, title, description, image, reverse,verticalTextAlign}:any) => {
  const noImage = (!image && !venue)
  return (
    <Row gutter={[30, 20]} style={{flexDirection:reverse ? "row-reverse" : "row"}} className='bg-white' align={verticalTextAlign}>
          <Col lg={noImage? 24 : 14} md={noImage? 24 : 16} sm={noImage? 24 : 18} xs={noImage? 24 : 24}>
          <Title level={4} className='capitalize !font-bold !mb-10 !text-black text-center'>{title}</Title>
          <Paragraph className='!text-justify'>
            <div className='rich-text' dangerouslySetInnerHTML={{__html:`<div>${description}</div>`}} />
          </Paragraph>
          </Col>
          {
            image &&
            <Col lg={10} md={8} sm={6} xs={24} className={`flex justify-center items-center`}>
          <Image src={ typeof(image) === 'string' ? image:getImageUrl(image?.data?.attributes?.url)} className='aspect-square object-cover rounded-2xl' preview={false} width={'80%'} alt='image' />
          </Col>
          }
          {
            !image && venue && 
            <Col  lg={10} md={8} sm={6} xs={24}>
          <Map1 width={'100%'} location={venue||"Nepal Boxing Federation"} />
          </Col>
          }
          {
            image && venue && 
            <Col lg={24} md={24} sm={24} xs={24}>
          <Map1 height={300} location={venue||"Nepal Boxing Federation"} />
          </Col>
          }
        </Row>
  )
}

export default EventDetailSection