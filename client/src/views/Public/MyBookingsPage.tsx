import React, { useEffect } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Container from '../../Layouts/Container'
import BookingPageContent from '../../components/BookingPageContent/BookingPageContent'
import MyBookings from '../../components/MyBookings/MyBookings'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../api/AuthApi'

const MyBookingsPage = () => {
  const token = getToken()
  const navigate = useNavigate()
  const ref = window?.location?.pathname
  useEffect(()=> {
    if (!token) {
      navigate(`/auth/login?ref=${ref}`)
    }
  },[token])
  return (
    <MainLayout title="My Bookings">
        <Container>
            <MyBookings />
        </Container>
    </MainLayout>
  )
}

export default MyBookingsPage