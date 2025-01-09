import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import { Typography } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { getFutsal } from '../../../../api/FutsalApi'
import { EditOutlined } from '@ant-design/icons'
import { getUser } from '../../../../api/UserApis'

const UserDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data } = useQuery({
        queryKey:['user',id], queryFn:getUser
    })

    console.log(data)
    const user = (data?.data?.user)
  return (
    <DashboardLayout title={"User Details"}>
        <Typography.Title level={2}>{user?.name} <EditOutlined onClick={()=>navigate(`edit`)} /></Typography.Title>
        <Typography.Text>{user?.address}</Typography.Text><br />
        <Typography.Link href={`mailto:${user?.email}`}>{user?.email}</Typography.Link><br />
        <Typography.Link href={`tel:${user?.phone}`}>{user?.phone}</Typography.Link>
    </DashboardLayout>
  )
}

export default UserDetail