import { Col, Divider, Image, Row, Typography } from 'antd';
import './Location.css';

export default function Location(){
    return(
        <div>
            <Typography.Title level={2} className="location-title">Contact</Typography.Title>
            <Row gutter={30} className="location-container">
                <Col span={12}>
                    <div style={{paddingLeft:'20px',textAlign:"justify"}}>
                    <Typography.Paragraph className='futsal-name'>White Horse Futsal</Typography.Paragraph>
                <Divider style={{backgroundColor:'gray'}}/>
                <Typography.Paragraph className='location-address'>Nilopool, Kapan, Kathmandu</Typography.Paragraph>
                <Typography.Paragraph className='locate'>200 meters ahead of Nilopool Petrol Pump</Typography.Paragraph>
                <Typography.Paragraph className='contact'><a href="callto:01-4454147">Call Us At: 01-4454147</a> </Typography.Paragraph>
                <Typography.Paragraph className='email'><a href="mailto:whorse223@gmail.com">Email at: whorse223@gmail.com</a></Typography.Paragraph>
                    
                 <Row className='note'>
                Note: Please check out the map on the right side --{'>'}
            </Row>
            </div>
                </Col>
                <Col span={12}>
                <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=white%20horse%20futsal&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe><a href="https://www.whatismyip-address.com"></a><br/><a href="https://www.embedgooglemap.net">google map embed code generator</a></div></div>

                </Col>
            </Row>
            
        </div>
            
    );
}