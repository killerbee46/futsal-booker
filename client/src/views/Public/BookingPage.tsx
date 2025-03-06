import React, { useEffect } from 'react'
import Container from '../../Layouts/Container'
import MainLayout from '../../Layouts/MainLayout'
import TimeTable from '../../components/TimeTable/TimeTable'
import { Card, Flex, Tabs, Typography } from 'antd'
import dayjs from 'dayjs'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getFutsal } from '../../api/FutsalApi'

const BookingPage = () => {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['futsal', id], queryFn: getFutsal
  })

  const futsal = (data?.data?.futsal)
  const noImage = 'https://imgs.search.brave.com/N3WfNHpXhtxnxMSKIw3htA1ksVdZ6hWK2h3hooHrwvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn'
  
  const dates = [
    { label: 'Today', key: dayjs().format("YYYY-MM-DD") },
    { label: 'Tomorrow', key: dayjs().add(1, 'day').format("YYYY-MM-DD") },
    { label: dayjs().add(2, 'days').format("dddd"), key: dayjs().add(2, 'days').format("YYYY-MM-DD") },
  ]

  const [searchParams, setSearchParams] = useSearchParams()

  const date = searchParams.get('date')

  useEffect(() => {
    setSearchParams({ date: dates[0]?.key })
  }, [])

  const onTabChange = (e: any) => {
    setSearchParams({ date: e })
  }
  return (
    <MainLayout >
      <Container>
        <Card>
          <Flex align='center' justify='space-between'>
            <Typography.Title level={4} className='uppercase'>{futsal?.name}</Typography.Title>
            <Flex gap={10} align='center'>
              <div>Index:</div>
              <Flex align='center' gap={5}><div className='bg-[#008000] w-3 h-3 rounded-full' /> Available</Flex>
              <Flex align='center' gap={5}><div className='bg-red-600 w-3 h-3 rounded-full' /> Booked</Flex>
            </Flex>
          </Flex>
          <Tabs onChange={onTabChange} centered items={dates} />
          <TimeTable futsal={{...futsal, date:date}} />
        </Card>
      </Container>
    </MainLayout>
  )
}

export default BookingPage