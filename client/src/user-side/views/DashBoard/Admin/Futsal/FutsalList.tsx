import React from 'react'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import { useQuery } from '@tanstack/react-query'
import { getFutsals } from '../../../../../api/FutsalApi'
import { Table, Typography } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

const FutsalList = () => {
  const {data,isFetching} = useQuery({queryKey:['futsals'],queryFn:getFutsals})
  const columns = [
    {
      title:"SN",
      dataIndex:'id',
      key:'id',
      render:(_,__,i)=>i+1
    },
    {
      title:"Name",
      dataIndex:'name',
      key:'name',
      render:(name,row,i)=><Typography.Link href={`${row?._id}`}>{name}</Typography.Link>
    },
    {
      title:"Location",
      dataIndex:'location',
      key:'location',
      // render:(_,__,i)=>i+1
    },
    {
      title:"Phone",
      dataIndex:'phone',
      key:'phone',
      render:(phone)=><Typography.Link href={`tel:${phone}`}>{phone}</Typography.Link>
    },
    {
      title:<SettingOutlined />,
      dataIndex:'id',
      key:'id',
      render:(_,__,i)=>i+1
    },
  ]
  console.log(data)
  return (
    <DashboardLayout title={"Futsals"} loading={isFetching}>
      <h2>Futsals</h2>
      <Table dataSource={data?.data?.futsals} columns={columns} />
    </DashboardLayout>
  )
}

export default FutsalList