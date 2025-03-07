import { Card, Flex, Select, Table, Tabs, Tag, Typography } from 'antd'
import dayjs from 'dayjs'
import DashboardLayout from '../../../Layouts/DashboardLayout'
import TimeTable from '../../../components/TimeTable/TimeTable'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { localUser } from '../../../api/AuthApi'
import { getFutsalsByOwner } from '../../../api/FutsalApi'

const FutsalOwnerBookingControlPage = () => {
  const user = localUser()
  const { data, refetch } = useQuery({ queryKey: ['my-futsals', { owner: user?._id }], queryFn: getFutsalsByOwner })

  const futsals = data?.data?.futsals

  const futsalList = data && data.length !== 0 ? futsals?.map((d: any) => ({
    label: d?.name, value: d?._id
  })) : []
  
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [selectedFutsal, setSelectedFutsal] = useState({})

  const date = searchParams.get('date')
  const futsalId = searchParams.get('futsal')
  
  const dates = [
    { label: 'Today', key: dayjs().format("YYYY-MM-DD") },
    { label: 'Tomorrow', key: dayjs().add(1, 'day').format("YYYY-MM-DD") },
    { label: dayjs().add(2, 'days').format("dddd"), key: dayjs().add(2, 'days').format("YYYY-MM-DD") },
    { label: dayjs().add(3, 'days').format("dddd"), key: dayjs().add(3, 'days').format("YYYY-MM-DD") },
    { label: dayjs().add(4, 'days').format("dddd"), key: dayjs().add(4, 'days').format("YYYY-MM-DD") },
    { label: dayjs().add(5, 'days').format("dddd"), key: dayjs().add(5, 'days').format("YYYY-MM-DD") },
    { label: dayjs().add(6, 'days').format("dddd"), key: dayjs().add(6, 'days').format("YYYY-MM-DD") },
    { label: dayjs().add(7, 'days').format("dddd"), key: dayjs().add(7, 'days').format("YYYY-MM-DD") },
  ]

  useEffect(() => {
    searchParams.set( 'date', dates[0]?.key )
    setSearchParams(searchParams)
  }, [])

  useEffect(() => {
    const temp = futsals?.find((f:any)=> f?._id == futsalId)
    setSelectedFutsal(temp)
  }, [searchParams])

  useEffect(() => { 
    searchParams.set( 'futsal', futsalList[0]?.value )
    setSearchParams(searchParams)
  }, [data])

  const onTabChange = (e: any) => {
    searchParams.set('date', e )
    setSearchParams(searchParams)
  }

  return (
    <DashboardLayout title={"Bookings"}>
      <Card>
        <Flex align='center' justify='space-between'>
          <Select value={futsalId} onChange={(e) => {
            const temp = futsalList?.find((f:any)=> f?.value === e)
            searchParams.set('futsal',e)
            setSearchParams(searchParams)
          }} options={futsalList} className='min-w-[200px]' />
          <Flex gap={10} align='center'>
            <div>Index:</div>
            <Flex align='center' gap={5}><div className='bg-[#008000] w-3 h-3 rounded-full' /> Available</Flex>
            <Flex align='center' gap={5}><div className='bg-red-600 w-3 h-3 rounded-full' /> Booked</Flex>
          </Flex>
        </Flex>
        <Tabs onChange={onTabChange} centered items={dates} />
        <TimeTable owner futsal={{ ...selectedFutsal, date: date }} />
      </Card>
    </DashboardLayout>
  )
}

export default FutsalOwnerBookingControlPage