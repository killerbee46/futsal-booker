import { Col, Divider, Image, Row, Typography } from 'antd';
import './About.css';

export default function About(){
    return(
        <div>
            <Typography.Title level={2} className="about-title">About Us</Typography.Title>
            <Row gutter={30} className="about-container">
                <Col span={12}>
                <Image src="https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg" />
                </Col>
                <Col span={12}>
                <Typography.Text className='name'>Hari Wagle</Typography.Text>
                <Typography.Text className='position'>, Owner</Typography.Text>
                <Divider style={{backgroundColor:'gray'}}/>
                <Typography.Paragraph className='message'>White horse futsal is one of the reputed futsal centers in Kapan area. With regular renewal
                carpet and proper maintainence, players from a large radius of place prefer White Horse Futsal. Don't believe my word? You're welcome to play on our futsal any time.</Typography.Paragraph>
                </Col>
            </Row>
        </div>
            
    );
}