import React from 'react'
import Container from '../../Layouts/Container'
import MainLayout from '../../Layouts/MainLayout'
import TimeTable from '../../components/TimeTable/TimeTable'

const BookingPage = () => {
  return (
    <MainLayout >
        <Container>
        Booking Page
        <TimeTable />
        </Container>
    </MainLayout>
  )
}

export default BookingPage