import { Form, Image, message, Upload } from 'antd';
import React, { useEffect, useState } from 'react'
import { useMutation } from "@tanstack/react-query"
import { uploadFile } from '../../api/UploadApi';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import getImage from '../../utils/getImage';
import { FormInstance } from 'antd/es/form/Form';

const FileUpload = ({ name, form, loading, defaultImage, label}: { name: string, form: FormInstance<any> | undefined, loading: boolean, defaultImage:string|"",  label?:string}) => {
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
    <Form.Item name={name} label={label}>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader overflow-hidden"
        showUploadList={false}
        // beforeUpload={beforeUpload}
        // onChange={handleChange}
        customRequest={(e) =>
          mutate({ image: e?.file })
        }
      >
          {
            loading ? 
            <>
                <LoadingOutlined />
                <div style={{ marginTop: 8 }}>Loading</div>
              </>:
            prevImage && prevImage !== "" || (defaultImage && defaultImage !== "") ?
//  <div
// className={`w-full h-full bg-[url(${getImage(prevImage) || defaultImage})] bg-black rounded-lg p-1 aspect-square bg-center object-cover object-center`}
// />
              <div className='w-full h-full overflow-hidden flex justify-center items-center rounded-lg'>
                <Image preview={false} src={getImage(prevImage)} /> 
              </div>
              :
              <div className='flex flex-col justify-center items-center'>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
          }
      </Upload>
    </Form.Item>
  );
}

export default FileUpload