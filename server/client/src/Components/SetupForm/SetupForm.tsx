import { Typography, Card, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import FormStep from './FormStep';
import CompanyInfo from './CompanyInfo';
import SuperAdmin from './SuperAdmin';
import Department from './Department';
import { FORMSTATE } from './SetupFormTypes';

const SetupForm = () => {
  const [formData, setFormData] = useState({
    logo: '',
    org_name: '',
    email: '',
    password: '',
    dep_name: '',
    dep_desc: ''
  });

  const [formState, setFormState] = useState(FORMSTATE.ORGANIZATIION_DETAIL);

  const runSetup = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const updateFormState = (value: any) => {
    setFormState(value);
  };

  const current =
    formState === FORMSTATE.ORGANIZATIION_DETAIL
      ? 0
      : formState === FORMSTATE.SUPER_ADMIN
      ? 1
      : 2;
  return (
    <div>
      <FormStep current={current} />
      {formState === FORMSTATE.ORGANIZATIION_DETAIL && (
        <Typography.Title
          level={2}
          style={{ textAlign: 'center', textTransform: 'uppercase' }}
        >
          Welcome To Setup Wizard
        </Typography.Title>
      )}
      <Row justify={'center'}>
        <Col span={8}>
          <Card style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
            {formState === FORMSTATE.ORGANIZATIION_DETAIL && (
              <CompanyInfo
                updateFormState={updateFormState}
                formData={formData}
                updateFormData={setFormData}
              />
            )}
            {formState === FORMSTATE.SUPER_ADMIN && (
              <SuperAdmin
                updateFormState={updateFormState}
                formData={formData}
                updateFormData={setFormData}
              />
            )}
            {formState === FORMSTATE.DEPARTMENT && (
              <Department
                updateFormState={updateFormState}
                formData={formData}
                updateFormData={setFormData}
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SetupForm;
