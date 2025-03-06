import React from 'react'
import Container from '../../Layouts/Container'
import MainLayout from '../../Layouts/MainLayout'
import { Button, Col, Flex, Image, Rate, Row, Tag, Typography } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import { getFutsal } from '../../api/FutsalApi'
import Map1 from '../../user-side/Map/Map1/Map1'
import GallerySlider from '../../components/GallerySlider/GallerySlider'
import { CheckSquareFilled } from '@ant-design/icons'
import getImage from '../../utils/getImage'

const FutsalDetailPage = () => {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['futsal', id], queryFn: getFutsal
  })

  const futsal = (data?.data?.futsal)
  const noImage = 'https://imgs.search.brave.com/N3WfNHpXhtxnxMSKIw3htA1ksVdZ6hWK2h3hooHrwvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn'
  return (
    <MainLayout >
      <Container>
        <Row gutter={30} className='my-6' align={'middle'}>
          <Col lg={12}>
            <GallerySlider images={Array(5)?.fill(null)?.map(() => ({
              image: futsal?.image ? getImage(futsal?.image) : noImage
            }))} />
          </Col>
          <Col lg={12}>
          <Typography.Title level={3} className='uppercase'>{futsal?.name}</Typography.Title>
          <Flex gap={10}>
            <Rate count={5} style={{fontSize:14}} value={4} disabled />
            <Typography.Paragraph className='!text-sm text-slate-500'>(150 Ratings)</Typography.Paragraph>
          </Flex>
            <Typography.Paragraph className='!mb-8 my-3 font-semibold'>RS. 1000 /Hr</Typography.Paragraph>
          <Typography.Paragraph className='my-3'>{futsal?.location}</Typography.Paragraph>
          <Typography.Link className='my-3' href={`tel:${futsal?.phone}`}>{futsal?.phone}</Typography.Link>
          <Flex className='my-3' justify='start' gap={10}>
            <Tag><CheckSquareFilled className='text-green-700 me-1' />5 A Side</Tag>
            <Tag><CheckSquareFilled className='text-green-700 me-1' />7 A Side</Tag>
          </Flex>
            <Link to={'book'}>
              <Button type='primary'>Book Now</Button>
            </Link>
          </Col>
        </Row>
        <Map1 height={300} location={futsal?.google_map_location_string} />
      </Container>
    </MainLayout>
  )
}

export default FutsalDetailPage