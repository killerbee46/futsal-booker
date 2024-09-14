import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { uploadFile } from '../../../api/UploadApi';
import { useMutation } from '@tanstack/react-query';

type FileTypes = {
    module:"user"|"futsal"|"team";
    type:"docs"|"image";
}

const FileUpload = ({module,type}:FileTypes) => {
    const {mutate:upload} = useMutation({
        mutationFn:uploadFile
    })
    const props = {
        name: 'file',
        // action: 'http://localhost:8080/upload',
        headers: {
            authorization: 'authorization-text',
        },
        CustomEvent:()=>{
            console.log("uploading")
        },
        onChange(info) {
            const formData = new FormData()
            formData.append("module",module),
            formData.append("type",type),
            formData.append("file",info?.file?.originFileObj)
            // const formData = {
            //     file:info?.file?.originFileObj,
            //     module:module||"any",
            //     type:type||"any"
            // }
            upload(formData)
        }
    };

    return (
        <div style={{ margin: '50px' }}>
            <Upload  {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </div>
    );
};

export default FileUpload;

// import { Button, Form, message, Upload } from 'antd'
// import React, { useState } from 'react'
// import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
// import { useForm } from 'antd/es/form/Form';

// const FileUpload = ({ image=false, label='File',name='file', required, defaultImage, setImageData }: any) => {
//     const [form] = useForm()
//     const [loading, setLoading] = useState(false);
//     const [imageUrl, setImageUrl] = useState<string>();

//     const imageUploadButton = (
//         <button style={{ border: 0, background: 'none' }} type="button">
//           {loading ? <LoadingOutlined /> : <PlusOutlined />}
//           <div style={{ marginTop: 8 }}>Upload</div>
//         </button>
//       );

//     const beforeUpload = (file: any) => {
//         const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//         if (!isJpgOrPng &&image) {
//             message.error('You can only upload JPG/PNG file!');
//         }
//         const isLt2M = file.size / 1024 / 1024 < 2;
//         if (!isLt2M) {
//             message.error('File must be smaller than 2MB!');
//         }
//         return (image ? isJpgOrPng : true) && isLt2M;
//     };

//     const handleChange= (info:any) => {
//         const file = info?.file?.originFileObj
//         // const base64 = getBase64(file,addToForm)
//         const blob = URL.createObjectURL(file)
//         form.setFieldsValue({
//             image:file
//         })
//         if(!info){
//             setImageUrl("")
//         }
//         setImageUrl(blob)
//     };
//     return (
//         <>
//         <Form.Item label={label} name={name} rules={[
//             {required:required, message:<div style={{textTransform:'capitalize'}}>{label} is required</div>}
//         ]}>
//         <Upload
//         name="avatar"
//         listType="picture-card"
//         className="avatar-uploader"
//         showUploadList={false}
//         action={"localhost:8000/upload"}
//         beforeUpload={beforeUpload}
//         // onChange={handleChange}
//       >
//             {
//                 image ?
//                 defaultImage ?
//                 <img src={defaultImage} alt="avatar" style={{ width: '100%' }} />   :
//                    imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : imageUploadButton :
//                     <Button>
//                         <UploadOutlined /> Upload File
//                     </Button>
//             }
//         </Upload>
//         </Form.Item>
//     </>
//     )
// }

// export default FileUpload