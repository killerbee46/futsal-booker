import { Card, Col, Layout, Row, Table, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useState } from 'react';
import Header from '../Header/Header';
import './Booking.css';

export default function Booking() {

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
                    <Card className='timecard' size='default'>
            <Typography.Paragraph style={defstyle} className='time'>{data}</Typography.Paragraph>
            <Typography.Paragraph className='booker'>Booker</Typography.Paragraph>
        </Card>
                    </Col>
    );
    
    // if(confirm("Book the futsal???")){
    //     booked();
    // }else{
    //     setColor(color);
    // }
    return (
        <Layout>
            <Content>
                {/* <Typography.Paragraph className='greet'>Welcome, Username!!!</Typography.Paragraph> */}
                <Typography.Title style={{ marginTop: '10px' }} level={3} className='title'>Booking Table</Typography.Title>
                <Row className='booking-table'>
                    {time}
                </Row>
                <Row className="detail" justify='center' align='middle'> 
                  <Col span={12} className='index'>
                  Index: <span className='neutral'>Total:12</span><span className='red'>Booked:6</span><span className='green'>Available:6</span>
                </Col>  
                <Col span={12} className="you-booked">
                    <Typography.Paragraph className='booked'>Your Booking is at "TIME"</Typography.Paragraph>
                    <Typography.Paragraph className="not-booked">You Have No Booking YET!!!</Typography.Paragraph>
                </Col>
                </Row>

            </Content>
        </Layout>
    );
}