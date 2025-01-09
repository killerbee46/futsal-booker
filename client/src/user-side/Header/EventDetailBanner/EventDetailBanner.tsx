import DetailsCard1 from '@/components/DetailsCard/DetailsCard1/DetailsCard1'
import React from 'react'
import { EventDetailBannerTypes } from './EventDetailBanner.types'

const EventDetailBanner = ({image, details}:EventDetailBannerTypes) => {
  return (
    <div
        className='w-full aspect-[7/3] relative mb-[80px] rounded-2xl'
        style={{
          background:`url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className='absolute w-full flex justify-center align-middle right-0 left-0 bottom-[-50px] z-20'>
        <DetailsCard1
        details={details}
        />
        </div>
        </div>
  )
}

export default EventDetailBanner