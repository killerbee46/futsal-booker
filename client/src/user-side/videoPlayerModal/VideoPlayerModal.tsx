import { Modal } from 'antd'
import { X } from 'lucide-react'
import React from 'react'
import ReactPlayer from 'react-player'
import { VideoPlayerModalTypes } from './VideoPlayerModal.types'

const VideoPlayerModal = ({data,closeModal}:VideoPlayerModalTypes) => {
  const styles = `.ant-modal {
    box-shadow:none;
    .ant-modal-content{
    -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
      background:transparent;
      .ant-modal-close-x{
      color:white;
      font-weight:600;
      }
  }
  }`
  return (
    <>
    <style>{styles}</style>
    <Modal closeIcon={<X strokeWidth={2} />} open={data?.visible} footer={null} className="ant-modal !w-3/4 !p-0 top-0 !bg-transparent" destroyOnClose onCancel={closeModal}>
      <ReactPlayer playing={true} className="mt-10 aspect-video" controls width={'100%'} height={"100%"} url={data?.url} />
      </Modal></>
  )
}

export default VideoPlayerModal