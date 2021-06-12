import { Col, Row } from 'antd';
import './Footer.css';

export default function Footer(){
    return(
        <Row className='footer-container' justify='center' align='middle'> 
            <Col className='footer'>
           Copyright &copy; 2021. All Rights Reserved by Hami (3-1) Bhai.
            </Col>
        </Row>
    );
}