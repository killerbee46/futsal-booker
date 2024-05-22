import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import { Typography } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { getFutsal } from '../../../../../api/FutsalApi'
import { EditOutlined } from '@ant-design/icons'
import { getUser } from '../../../../../api/UserApis'

const UserDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data } = useQuery({
        queryKey:['user',id], queryFn:getUser
    })

    console.log(data)
    const futsal = (data?.data?.futsal)
  return (
    <DashboardLayout title={"Futsal Details"}>
        <Typography.Title level={2}>{futsal?.name} <EditOutlined onClick={()=>navigate(`edit`)} /></Typography.Title>
        <Typography.Text>{futsal?.address}</Typography.Text><br />
        <Typography.Link href={`mailto:${futsal?.email}`}>{futsal?.email}</Typography.Link><br />
        <Typography.Link href={`tel:${futsal?.phone}`}>{futsal?.phone}</Typography.Link>
    </DashboardLayout>
  )
}

export default UserDetail