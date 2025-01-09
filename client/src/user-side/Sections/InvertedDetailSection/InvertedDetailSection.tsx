'use client'
import React from 'react'
import { SectionTypes } from '../Section.types'
import EventDetailSection from '../EventDetailSection/EventDetailSection'
import SectionTitle from '../../Open Intl/v2/SectionTitle/SectionTitle'
import MainContainer from '../../Maincontainer/Maincontainer'

const InvertedDetailSection = ({data, invertFromFirst, sectionTitle, subtitle}:SectionTypes) => {
  return (
    <div className='my-20'>
      <MainContainer>
      <SectionTitle title={sectionTitle} subtitle={subtitle} /> 
        {
            data?.map((d:any,i:number)=> {
                const reverse = invertFromFirst ? i%2 === 0 : i%2 !== 0
                return <EventDetailSection reverse={reverse}  key={i} {...d} image={d?.icon} verticalTextAlign="center" />
            })
        }
      </MainContainer>
    </div>
  )
}

export default InvertedDetailSection