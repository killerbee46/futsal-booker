import { Card, Col, Layout, Row, Table, Typography } from 'antd';
import { useState } from 'react';
import './AdminBooking.css';

export default function AdminBooking() {

    const [color, setColor] = useState('yellowgreen');
    const defstyle = {
        backgroundColor: color
    }
    function booked() {
        setColor('red');
    }
    const numbers = ["6 - 7","7 - 8","8 - 9", '9 - 10',"10 - 11", "11 - 12", "12 - 1","1 - 2","2 - 3","3 - 4","4 - 5","5 - 6"];
    const time = numbers.map((data) =>
    <Col span={6}>
                    <Card className='ad-timecard' size='default'>
            <Typography.Paragraph style={defstyle} className='ad-time'>{data}</Typography.Paragraph>
            <Typography.Paragraph className='ad-booker'>Booker</Typography.Paragraph>
        </Card>
                    </Col>
    );
    
    // if(confirm("Book the futsal???")){
    //     booked();
    // }else{
    //     setColor(color);
    // }
    return (
        <div>
                {/* <Typography.Paragraph className='greet'>Welcome, Username!!!</Typography.Paragraph> */}
                <Typography.Title style={{ marginTop: '-20px' }} level={3}>Admin Booking Control</Typography.Title>
                <Row className='ad-booking-table'>
                    {time}
                </Row>
                <Row justify='center' align='middle' className='status'> 
                  <Col span={12}>
                  Index: <span className='neutral'>Total:12</span><span className='red'>Booked:6</span><span className='green'>Available:6</span>
                </Col>  
                </Row>
                </div>
    );
}