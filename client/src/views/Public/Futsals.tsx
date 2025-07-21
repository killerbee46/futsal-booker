import { useEffect } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Container from "../../Layouts/Container"
import { Col, Row } from 'antd'
import FutsalCard from '../../components/FutsalCard/FutsalCard'
import { useQuery } from '@tanstack/react-query'
import { getFutsals } from '../../api/FutsalApi'
import { useSearchParams } from 'react-router-dom'
import { getQuery } from '../../utils/getQuery'

const Futsals = () => {
  const [searchParams] = useSearchParams()
  const queryKeys = ['category', 'name','location']
  const query = getQuery(queryKeys,searchParams)
  const {data, refetch} = useQuery({queryKey:['futsals',query],queryFn:getFutsals})
  const futsals = data?.data?.futsals

  useEffect(()=> {
    getQuery(queryKeys,searchParams)
refetch()
  },[searchParams])
  return (
    <MainLayout tabFilter>
        <Container>
        <Row gutter={[30, 30]}>
          {
            futsals?.map((f:any, i:number)=> {
              return <Col xl={6} xxl={4} md={8} sm={12} key={i}>
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