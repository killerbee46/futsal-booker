import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Container from "../../Layouts/Container"
import { Col, Row } from 'antd'
import FutsalCard from '../../components/FutsalCard/FutsalCard'
import { useQuery } from '@tanstack/react-query'
import { getFutsals } from '../../api/FutsalApi'

const Futsals = () => {
  const {data, refetch} = useQuery({queryKey:['futsals'],queryFn:getFutsals})
  const futsals = data?.data?.futsals
  console.log(futsals)
  return (
    <MainLayout >
        <Container>
        <Row gutter={[30, 30]}>
          {
            futsals?.map((f)=> {
              return <Col lg={4}>
              <FutsalCard {...f} />
              </Col>
            })
          }
        </Row>
        </Container>
    </MainLayout>
  )
}

export default Futsals