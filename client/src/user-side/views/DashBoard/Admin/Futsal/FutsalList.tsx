import React from 'react'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import { useQuery } from '@tanstack/react-query'
import { getFutsal } from '../../../../../api/FutsalApi'
import { Tag } from 'antd'

const FutsalList = () => {
  const {data,isFetching} = useQuery({queryKey:['futsal-list'],queryFn:getFutsal})
  console.log(data)
  return (
    <DashboardLayout loading={isFetching}>
      {
        data?.data?.futsal?.map((d)=> {
          return <Tag>{d?.name}</Tag>
        })
      }
    </DashboardLayout>
  )
}

export default FutsalList