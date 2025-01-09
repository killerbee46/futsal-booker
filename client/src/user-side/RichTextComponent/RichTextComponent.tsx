import React from 'react'
import { Col, Image, Row } from 'antd'
import getImageUrl from '../../utilFunctions/getImageUrl'
import SectionTitle from '../Open Intl/v2/SectionTitle/SectionTitle'
import MainContainer from '../Maincontainer/Maincontainer'

const RichTextComponent = ({title, content, image}:any) => {
  
  return (
    <MainContainer className='my-5 md:my-10 lg:my-20'>
<SectionTitle title={title} />
        <Row gutter={40} align={'middle'}>
          <Col lg={image?.data ? 16 : 24} xs={24}>
          <div className='!text-justify rich-text' dangerouslySetInnerHTML={{__html:`<div>${content}</div>`}} />
          </Col>
          {
            image?.data &&
            <Col lg={8} xs={24}>
          <Image src={getImageUrl(image?.data?.attributes?.url)} className=' aspect-square object-cover rounded-2xl' preview={false} width={'100%'} alt='image' />
          </Col>
          }
        </Row>
    </MainContainer>
  )
}

export default RichTextComponent