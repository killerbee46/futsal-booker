import MainContainer from '../../../../components/Maincontainer/Maincontainer'
import SectionTitle from '../../../../components/Open Intl/v2/SectionTitle/SectionTitle'
import { Col, Image, Row } from 'antd'
import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

const ServiceContainer = ({data, image, sectionTitle}:any) => {
    const primaryLimit:number = Math.floor(data?.length / 2 <= 2 ? data?.length / 2 : 4)
    console.log(primaryLimit, "primary length")
    const primary = data?.slice(0,primaryLimit*2)
    const bottom = data?.slice(primary*2+1,-1)
  return (
    <MainContainer>
        <SectionTitle title={sectionTitle} />
        <MainContainer>
            <Row>
                <Col xs={12} md={0} lg={0}>
                <Image src={image} alt='image' width={'100%'} preview={false} className='aspect-square' /></Col>
            </Row>
        <Row gutter={30} align={'middle'} justify={'center'}>
            <Col md={9} xs={24}>
            {primary?.map((d:any, i:number)=> {
                if (i%2 === 0) {
                    return <ServiceCard key={i} {...d} />
                }
            })}
            </Col>
            <Col md={6} xs={0}><Image src={image} alt='image' width={'100%'} preview={false} className='aspect-square' /></Col>
            <Col lg={9} md={8} xs={24}>
            {primary?.map((d:any, i:number)=> {
                if (i%2 !== 0) {
                    return <ServiceCard key={i} {...d} />
                }
            })}</Col>
            {
                bottom?.map((b:any, i:number)=> {
                    return <Col key={i} md={12} xs={24}>
                        <ServiceCard {...b} />
                    </Col>
                })
            }
        </Row>
        </MainContainer>
    </MainContainer>
  )
}

export default ServiceContainer