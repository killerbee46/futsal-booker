import { Col, Flex, Row, Spin } from 'antd'
import BookingConfirmationModal from '../BookingConfirmationModal/BookingConfirmationModal'
import { useQuery } from '@tanstack/react-query'
import { getBookingsByFutsal } from '../../api/BookingApi'

export const time = [
    {key:1,start:"6:00 AM", end:"7:00 AM"},
    {key:2,start:"7:00 AM", end:"8:00 AM"},
    {key:3,start:"8:00 AM", end:"9:00 AM"},
    {key:4,start:"9:00 AM", end:"10:00 AM"},
    {key:5,start:"10:00 AM", end:"11:00 AM"},
    {key:6,start:"11:00 AM", end:"12:00 PM"},
    {key:7,start:"12:00 PM", end:"1:00 PM"},
    {key:8,start:"1:00 PM", end:"2:00 PM"},
    {key:9,start:"2:00 PM", end:"3:00 PM"},
    {key:10,start:"3:00 PM", end:"4:00 PM"},
    {key:11,start:"4:00 PM", end:"5:00 PM"},
    {key:12,start:"5:00 PM", end:"6:00 PM"},
    {key:13,start:"6:00 PM", end:"7:00 PM"},
    {key:14,start:"7:00 PM", end:"8:00 PM"},
]

const TimeTable = ({futsal, owner}:any) => {
    const {data, refetch, isFetching:loading} = useQuery({
        queryKey:['bbf',{date_eq:futsal?.date, id:futsal?._id,status:"Booked"}],
        queryFn:getBookingsByFutsal
        
    })

    const bookings = data?.data?.booking
  return (
    <div>
        {
            loading ?
            <div className='w-full h-32 flex flex-col justify-center items-center'>
            <Spin />
            Loading... 
          </div> :
      <Row>
          {
              time.map((t:any, i:number)=>{
                  const bookingDetail = bookings?.find((f:any)=> f.time === t.key)
                  const booked = bookingDetail?.time === t?.key
                  return <Col key={i} lg={6} style={{border:'1px solid gray'}}>
                  <Flex align='center' justify='center' style={{padding:'20px 20px'}}>
                      <BookingConfirmationModal owner={owner} refetch={refetch} data={{time:t, futsal:futsal, booking:{...bookingDetail,booked:booked}}} />
                  </Flex>
          </Col>
              })
          }
      </Row>
        }
    </div>
  )
}

export default TimeTable