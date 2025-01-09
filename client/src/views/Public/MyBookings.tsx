import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Container from '../../Layouts/Container'
import BookingPageContent from '../../components/BookingPageContent/BookingPageContent'
import MyBookings from '../../components/MyBookings/MyBookings'

const BookingsPage = () => {
  return (
    <MainLayout title="My Bookings">
        <Container>
            <MyBookings />
        </Container>
    </MainLayout>
  )
}

export default BookingsPage