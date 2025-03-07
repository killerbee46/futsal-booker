import { useQuery } from '@tanstack/react-query'
import { Card, Table, Tabs, Tag, Typography } from 'antd'
import { getBookings, getBookingsByUser } from '../../api/BookingApi'
import { time } from '../TimeTable/TimeTable'
import dayjs from 'dayjs'
import { localUser } from '../../api/AuthApi'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const MyBookings = () => {
  const user = localUser()
  const [searchParams, setSearchParams] = useSearchParams()

  const status = searchParams.get('status')

  const {data, isFetching} = useQuery({
          queryKey:['bbu',{user:user?._id, status:status}],
          queryFn:getBookingsByUser  
      })

  const bookings = data?.data?.booking
  
  const columns = [
    {
      title:"SN",
      dataIndex:'id',
      key:'id',
      render:(_:any,__:any,i:number)=>i+1
    },
    // {
    //   title:"Booked By",
    //   dataIndex:'booker',
    //   key:'name',
    //   render:(name:any, row:any)=><Typography.Link href={`/dashboard/users/${row?._id}/edit`}>{name?.name}</Typography.Link>
    // },
    {
      title:"Futsal",
      dataIndex:'futsal',
      key:'name',
      render:(name:any, row:any)=> <Typography.Paragraph>{name?.name}</Typography.Paragraph>
      // <Typography.Link href={`/futsals/${row?._id}`}>{name?.name}</Typography.Link>
    },
    {
      title:"Date",
      dataIndex:'date',
      key:'date',
      render:(name:any)=><Typography.Paragraph>{dayjs(name)?.format("DD MMM, YYYY")}</Typography.Paragraph>
    },
    {
      title:"Time",
      dataIndex:'time',
      key:'time',
      render:(name:any, row:any)=>{
        const bookTime = time?.find((f)=> f.key === name)
        return <Tag color={row?.status === "Booked" ? "green" : 'red'}>{bookTime?.start + " - " + bookTime?.end}</Tag>
      }
    },
    // {
    //   title:<SettingOutlined />,
    //   dataIndex:'_id',
    //   key:'_id',
    //   render:(id:any)=><TableAction
    //    id={id}
    //    deleteFunction={userDelete}
    //    deleted={deleted}
    //    module="user"
    //    />
    // },
  ]
  return (
    <Card>
    <Typography.Title level={5}>My Bookings</Typography.Title>
    <Tabs defaultActiveKey={status||''} onChange={(e)=> {
      searchParams.set('status',e)
      setSearchParams(searchParams)
    }} items={[
      {label:'All', key:''},
      {label:'Booked', key:'Booked'},
      {label:'Cancelled', key:'Cancelled'},
    ]} />
    <Table loading={isFetching} dataSource={bookings} columns={columns} pagination={{hideOnSinglePage:true}} />
    </Card>
  )
}

export default MyBookings