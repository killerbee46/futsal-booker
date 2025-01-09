import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getFutsal } from '../../../api/FutsalApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography } from 'antd'

const BookingPageContent = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data } = useQuery({
        queryKey:['futsal',id], queryFn:getFutsal
    })

    const futsal = (data?.data?.futsal)
  return (
    <div>
        <Typography.Title level={4}>{futsal?.name}</Typography.Title>
    </div>
  )
}

export default BookingPageContent