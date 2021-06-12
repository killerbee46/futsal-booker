import { useEffect } from 'react';
import { BankOutlined, MedicineBoxOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Col, Row, Button, Typography, Divider} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../../Layouts/AdminLayout/AdminLayout';
import { fetchBooking } from '../../Redux/BookingRedux/BookingActions';
import BookingItem from '../../Components/Table/BookingItem/BookingItem';

export const BookingList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooking({}));
    }, []);
    const bookings = useSelector((state: any) => state.BookingReducer);
    return (
        <AdminLayout>
            <Row justify='space-between'>
                <Col><Typography.Title level={3}>Booking List</Typography.Title></Col>
                <Col><a href="/booking-control"><Button type='primary'><PlusCircleOutlined />ADD BOOKING</Button></a></Col>
            </Row>
            <Divider />
            <table style={{ width: '100%', fontSize: '1.2em' }}>
                <tr>
                    <th>Organization Name</th>
                    <th>Level</th>
                    <th>Category</th>
                </tr>
                {bookings.list?.map((data: any, index: number) => {
                    return <BookingItem book={data} />;
                })}
            </table>
        </AdminLayout>

    );
};

export default BookingList;
