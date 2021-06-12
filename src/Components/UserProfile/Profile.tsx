import { Avatar, Card, Col, Row, Space, Typography } from 'antd';
import PBig from './PBig/PBig';
import './Profile.css';
import PSmall from './PSmall/PSmall';

export default function Profile() {
    return (<div className='profile'>
        <Col className="brief" span={12}>
            <PSmall />
        </Col>
        {/* <Col className="more" span={18}>
            <PBig />
        </Col> */}
    </div>

    );
}