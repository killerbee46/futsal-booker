import { Avatar, Col, Row, Space, Typography } from "antd";
import SocialLink from "../../SocialLink/SocialLink";
import './PSmall.css';

export default function PSmall() { 
    return (
        <Row className='small' justify='center'>
            <Space direction='vertical' size='large'>
                <Col className='avatar'>
                    <Avatar size={120} src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' />
                </Col>
                <Col className='detail'>
                    <Typography.Paragraph className='name'>User Name</Typography.Paragraph>
                    <Typography.Paragraph className='position'>Position</Typography.Paragraph>
                    <SocialLink/>
                    <Typography.Paragraph className='address'>Address, Address</Typography.Paragraph>
                    <Typography.Paragraph className='email'>email@email.com</Typography.Paragraph>
                    <Typography.Paragraph className='contact'>741/852963</Typography.Paragraph>
                </Col>
            </Space>
        </Row>
    );
}