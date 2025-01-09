import { Form, Image, message, Upload } from 'antd';
import React, { useEffect, useState } from 'react'
import { useMutation } from "@tanstack/react-query"
import { uploadFile } from '../../api/UploadApi';
import { PlusOutlined } from '@ant-design/icons';
import getImage from '../../utils/getImage';
import { FormInstance } from 'antd/es/form/Form';

const FileUpload = ({ name, form }: { name: string, form: FormInstance<any> | undefined }) => {
  const [prevImage, setPrevImage] = useState(form?.getFieldValue(name) || '')
  const { mutate } = useMutation({
    mutationFn: uploadFile,
    onSuccess(data: any) {
      form?.setFieldValue(name, data?.data?.url)
      message.success(data?.data?.message)
      setPrevImage(data?.data?.url)
    },
  })
  return (
    <Form.Item name={name}>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        // beforeUpload={beforeUpload}
        // onChange={handleChange}
        customRequest={(e) =>
          mutate({ image: e?.file })
        }
      >
        <button style={{ border: 0, background: 'none' }} type="button">
          {
            prevImage && prevImage !== "" ?
              <Image preview={false} src={getImage(prevImage)} width={'100%'} height={'100%'} /> :
              <>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </>
          }
        </button>
      </Upload>
    </Form.Item>
  );
}

export default FileUpload