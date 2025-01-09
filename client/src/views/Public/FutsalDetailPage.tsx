import React from 'react'
import Container from '../../Layouts/Container'
import MainLayout from '../../Layouts/MainLayout'
import { Button, Col, Image, Row, Typography } from 'antd'
import getImage from '../../utils/getImage'
import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getFutsal } from '../../api/FutsalApi'

const FutsalDetailPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data } = useQuery({
      queryKey:['futsal',id], queryFn:getFutsal
  })

  const futsal = (data?.data?.futsal)
    const noImage = 'https://imgs.search.brave.com/N3WfNHpXhtxnxMSKIw3htA1ksVdZ6hWK2h3hooHrwvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn'
  return (
    <MainLayout >
        <Container>
        <Row gutter={30}>
          <Col lg={12}>
          <Typography.Title>{futsal?.name}</Typography.Title>
          <Image preview={false} style={{aspectRatio:'2/1'}} src={(futsal?.image && getImage(futsal?.image)) || noImage} />
          </Col>
          <Col lg={12}>
          <Link to={'book'}>
          <Button type='primary'>Book Now</Button>
          </Link>
          </Col>
        </Row>
        </Container>
    </MainLayout>
  )
}

export default FutsalDetailPage