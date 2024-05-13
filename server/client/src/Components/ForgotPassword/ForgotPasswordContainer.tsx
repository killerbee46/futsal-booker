import { Card, Col, Row } from 'antd';
import { PropsTypes } from '../../utils/Types/Types';

const ForgotPasswordContainer = ({ title, children }: PropsTypes) => {
  return (
    <div>
      <Row style={{ height: '60vh' }} justify={'center'} align={'middle'}>
        <Col lg={8}>
          <Card className="custom_box-shadow" title={title}>
            {children}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPasswordContainer;
