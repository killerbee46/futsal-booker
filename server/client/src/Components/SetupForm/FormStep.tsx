import { Steps } from 'antd';
import React from 'react';

const FormStep = ({ current }: any) => {
  const steps = [
    {
      title: 'Organization Details'
    },
    {
      title: 'Super Admin'
    },
    {
      title: 'Department'
    }
  ];
  return (
    <div style={{ marginTop: 20 }}>
      <Steps progressDot current={current} items={steps} />
    </div>
  );
};

export default FormStep;
