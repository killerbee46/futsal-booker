import { Form, Image, message, Upload } from 'antd';
import React, { useEffect, useState } from 'react'
import { useMutation } from "@tanstack/react-query"
import { uploadFile } from '../../api/UploadApi';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import getImage from '../../utils/getImage';
import { FormInstance } from 'antd/es/form/Form';

const FileUpload = ({ name, form, loading, defaultImage}: { name: string, form: FormInstance<any> | undefined, loading: boolean, defaultImage:string|""}) => {
  const [prevImage, setPrevImage] = useState(form?.getFieldValue(name) || '')
  const { mutate } = useMutation({
    mutationFn: uploadFile,
    onSuccess(data: any) {
      form?.setFieldValue(name, data?.data?.url)
      message.success(data?.data?.message)
      setPrevImage(data?.data?.url)
    },
  })

  useEffect(()=> {
if (defaultImage && defaultImage !== undefined) {
  setPrevImage(defaultImage)
}
  },[defaultImage])
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
        <button style={{ border: 0, background: 'none', overflow:'hidden' }} type="button">
          {
            loading ? 
            <>
                <LoadingOutlined />
                <div style={{ marginTop: 8 }}>Loading</div>
              </>:
            prevImage && prevImage !== "" || (defaultImage && defaultImage !== "") ?
              <Image preview={false} src={getImage(prevImage)} className='w-full aspect-' /> 
              :
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