import { Card, Typography } from "antd";
import './FutsalInfo.css';

export default function FutsalInfo() {
    return (
        <Card className='infocard' id='about'>
            <Typography.Paragraph className='fname'>White Horse Futsal</Typography.Paragraph>
            <Typography.Paragraph className='address'>Nilopool, Kapan, Kathmandu</Typography.Paragraph>
        </Card>


    );
}