import { Button, Form, Input, Select, Typography } from 'antd';
import ImageUpload from '../ImageUpload/ImageUpload';
import { useForm } from 'antd/es/form/Form';
import { CompanyInfoFormTypes, FORMSTATE } from './SetupFormTypes';

const CompanyInfo = ({ updateFormState, updateFormData, formData }: any) => {
  const [form] = useForm();
  const updateForm = (values: CompanyInfoFormTypes) => {
    updateFormData({ ...formData, org_name: values?.org_name });
    updateFormState(FORMSTATE.SUPER_ADMIN);
  };
  return (
    <div>
      <Typography.Title className="text_center" level={3}>
        Organization Details
      </Typography.Title>
      <Form layout="vertical" form={form} onFinish={updateForm}>
        <Form.Item
          className="text_center"
          name={'logo'}
          rules={
            [
              // {required:true, message:"Logo Required"}
            ]
          }
        >
          <ImageUpload />
        </Form.Item>
        <Form.Item
          label="Organization Name"
          name={'org_name'}
          rules={[{ required: true, message: 'Name Required' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Address Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Timezone"
          name="timezone"
          rules={[{ required: true, message: 'Timezone Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Organization Email"
          name="email"
          rules={[{ required: true, message: 'Organization Email Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Domain"
          name="domain"
          rules={[{ required: true, message: 'Domain Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="PAN"
          name="pan"
          rules={[{ required: true, message: 'PAN number Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Auth Cache"
          name="authCache"
          rules={[
            {
              required: true,
              message: 'Please select one value for auth cache'
            }
          ]}
        >
          <Select
            defaultValue="session"
            options={[
              { value: 'session', label: 'Session' },
              { value: 'localStorage', label: 'Local Storage' }
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Session Time(ms)"
          name="sessionTime"
          rules={[{ required: true, message: 'Session expiry time missing' }]}
        >
          <Input />
        </Form.Item>
        <div className="flex justify_between">
          <Button type="text" size="large">
            SKIP
          </Button>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              NEXT
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default CompanyInfo;
