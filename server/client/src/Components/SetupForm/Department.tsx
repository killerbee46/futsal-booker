import { Typography, Input, Button, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useNavigate } from 'react-router-dom';
const Department = ({ updateFormState, updateFormData, formData }: any) => {
  const navigate = useNavigate();
  const [form] = useForm();
  const updateForm = (values: any) => {
    updateFormData({
      ...formData,
      dep_name: values?.dep_name,
      dep_desc: values?.dep_desc
    });
    // updateFormState(FORMSTATE.SUPER_ADMIN)
    navigate('/login');
  };
  return (
    <div>
      <Typography.Title className="text_center" level={3}>
        Add a Department
      </Typography.Title>
      <Form layout="vertical" form={form} onFinish={updateForm}>
        <Form.Item
          label="Name"
          name={'dep_name'}
          rules={[{ required: true, message: 'Name Required' }]}
        >
          <Input type="text" size="large" />
        </Form.Item>
        <Form.Item
          label="Description"
          name={'dep_desc'}
          rules={
            [
              // {required:true, message:"Password Required"}
            ]
          }
        >
          <Input type="text" size="large" />
        </Form.Item>
        <div className="flex justify_end">
          <Form.Item>
            <Button htmlType="submit" type="primary" size="large">
              SUBMIT
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Department;
