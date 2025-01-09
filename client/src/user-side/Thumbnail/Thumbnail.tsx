import { PlayCircle } from "lucide-react"

export const Thumbnail = ({data, onClick=()=> {}}:any) => {
    const isVideo = data?.mediaType === 'video'

    const videoStyle = isVideo ? {
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${data?.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }:{
        background: `url(${data?.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    return <div
    style={videoStyle}
    className='aspect-[7/3] overflow-hidden cursor-pointer' onClick={()=>onClick()}>
      {isVideo&&
      <div className="w-full h-full flex justify-center items-center text-primary hover:text-primary/60 text-xl">
        <PlayCircle strokeWidth={2} size={'30%'} />
      </div>
      }
    {/* <Image preview={false} src={} alt={data?.galleryTitle} width={'100%'} /> */}
    </div>
  }

  export default Thumbnail