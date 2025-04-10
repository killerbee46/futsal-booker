import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, message, Modal, Upload, UploadProps } from 'antd'
import { useEffect, useState } from 'react'
import './FileUpload.scss'
import { useMutation } from '@tanstack/react-query'
import { uploadFile } from '../../api/UploadApi'
import StackedImages from '../StackedImages/StackedImages'
import getImage from '../../utils/getImage'

const MultiFileUpload = ({ defaultValue, name, form, label, loading }: any) => {
    const defaultValueTransform = defaultValue && defaultValue.length > 0 ? defaultValue?.map((d: any) => ({
        url: getImage(d),
        status: 'done'
    })) : []
    const modalDefault = {
        visible: false,
        images: defaultValueTransform,
        formImages: defaultValue || []
    }
    const [uploadModal, setUploadModal] = useState<any>(modalDefault)
    const [prev, setPrev] = useState({
        previews:defaultValue,
        listData:defaultValueTransform
    })

    const { mutate } = useMutation({
        mutationFn: uploadFile,
        onSuccess(data: any) {
            const temp = uploadModal?.formImages
            temp.push(data?.data?.url)
            setUploadModal({ ...uploadModal, formImages: temp })
            message.success("Added to the list successfully!")
        },
    })
    const openModal = () => {
        setUploadModal({ ...uploadModal, visible: true })
    }

    const closeModal = () => {
        form.setFieldValue(name, uploadModal?.formImages)
        setPrev(uploadModal?.formImages)
        setUploadModal(modalDefault)
    }

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        const temp = newFileList?.map((d) => ({ ...d, status: 'done' }))
        setUploadModal({ ...uploadModal, images: temp });
    }

    const handleRemove: UploadProps['onRemove'] = (e) => {
        const index = uploadModal?.images?.indexOf(e)
        const temp = uploadModal?.formImages?.splice(index, 1)
        setUploadModal({ ...uploadModal, formImages: temp })
    }

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    useEffect(() => {
        setPrev(defaultValue)
        setUploadModal(modalDefault)
    }, [defaultValue])

    return (
        <Form.Item name={name} label={label}>
            <div onClick={openModal} className='w-fit'><StackedImages loading={loading} images={prev} /></div>
            <Modal footer={null} title="More Photos" open={uploadModal?.visible} onCancel={closeModal} >
                <div className='py-5'>
                    <Upload
                        className='multi-upload'
                        listType="picture-card"
                        fileList={(defaultValue && defaultValue.length > 0) || (uploadModal?.images && uploadModal?.images.length > 0) ? uploadModal?.images : []}
                        onRemove={handleRemove}
                        onChange={handleChange}
                        showUploadList={{showPreviewIcon:false}}
                        customRequest={(e) =>
                            mutate({ image: e?.file })
                        }
                    >
                        {uploadModal?.images.length >= 7 ? null : uploadButton}
                    </Upload>
                </div>
            </Modal>
        </Form.Item>
    )
}

export default MultiFileUpload