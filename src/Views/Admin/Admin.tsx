import AdminLayout from "../../Layouts/AdminLayout/AdminLayout";
import { Card, Col, Row, Typography } from 'antd';

export default function Admin(props: any){
    const style={
        backgroundColor:'cyan',
    }
    return(
        <AdminLayout>
            <Typography.Title level={3}>Dashboard</Typography.Title>
            <Row gutter={16}>
      <Col span={6}>
        <Card style={style}>
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card style={style}>
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card style={style}>
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card style={style}>
          Card content
        </Card>
      </Col>
    </Row>
        </AdminLayout>
            
       
    );
}