import { Modal } from "antd";
import { X } from "lucide-react";
import React from "react";
import MediaViewerCarousel from "../../../components/Carousel/MediaViewerCarousel/MediaViewerCarousel";

const MediaViewer = ({ data, closeModal }: any) => {
  const styles = `.ant-modal {
    box-shadow:none;
    .ant-modal-content{
    margin-top:0;
    -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
      background:transparent;
  }
  .ant-modal-root .ant-modal-mask{
  background:rgba(0,0,0,0.80)
  }
  }`;
  return (
    <>
      <style>{styles}</style>
      <Modal
        closeIcon={<X className="bg-destructive text-white font-semibold" strokeWidth={2} />}
        open={data?.visible}
        footer={null}
        className="ant-modal !w-[90%] !p-0 top-0"
        destroyOnClose
        onCancel={closeModal}
      >
        <MediaViewerCarousel defaultOpen={data?.open} data={data?.data} />
      </Modal>
    </>
  );
};

export default MediaViewer;
