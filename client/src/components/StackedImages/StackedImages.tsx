import React from 'react'
import getImage from '../../utils/getImage'
import { EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Flex, Image, Typography } from 'antd'

const StackedImages = ({images, loading}:any) => {
    return (
        <>
        {
            loading ? 
            <div className="relative w-28 rounded-lg p-3 h-full border-gray-500 border-dotted border aspect-square cursor-pointer flex flex-col gap-2 justify-center items-center">
            <LoadingOutlined />
            <Typography.Paragraph className='text-sm text-center'>Loading...</Typography.Paragraph>
            </div> :
            images && images.length > 0 ?
            <div className="relative group w-20 aspect-square cursor-pointer">
            {
                images?.map((img:String,i:number)=> {
                    const rotation = i*5
                    return (
                    <div className={`absolute z=[${rotation}] rotate-[${rotation}deg] h-full w-full border border-black-2/3`}>
                        <Image className='h-full w-full' preview={false} src={getImage(img)} />
                        </div>
                )})
            }
            <div className='hidden group-hover:inline-block absolute -top-2 -right-2 px-2 py-1 border border-gray-400 rounded-full bg-white'>
                <EditOutlined />
            </div>
        </div>
        :
        <div className="relative w-28 rounded-lg p-3 h-full border-gray-500 border-dotted border aspect-square cursor-pointer flex flex-col gap-2 justify-center items-center">
            <PlusOutlined />
            <Typography.Paragraph className='text-sm text-center'>Add More Photos</Typography.Paragraph>
        </div>
        }
        </>
    )
}

export default StackedImages