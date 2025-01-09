import React from 'react'
import { Error404Types } from '../error404Types'
import MainContainer from '../../../components/Maincontainer/Maincontainer'
import Title from 'antd/es/typography/Title'
import Link from 'antd/es/typography/Link'
import { Button } from '../../../components/button/Button'

const Error404A = ({title,subtitle, buttonLabel, buttonPath, description, backgroundPrimary, backgroundSecondary, image, textColor}:Error404Types) => {
  const fontColor = textColor ? `!text-[${textColor}]` : '!text-white'
  return (
    <div
      style={{
        background:
        // "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${image}),linear-gradient(to right, ${backgroundPrimary}, ${backgroundSecondary})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "80% center",
        minHeight: 500,
        paddingTop: 150,
      }}
    >
      <MainContainer>
        <div style={{
        
      }}>
        <div className='sm:w-full md:w-[70%] h-[300px] flex flex-col items-center justify-center gap-5 md:gap-8 lg:gap-12' >
        <Title className='!m-0 !text-white !font-bold'>{title}</Title>
        <Title level={4} className='!m-0 !text-white !font-semibold'>{subtitle}</Title>
        <Title level={5} className='!m-0 !text-white'>{description}</Title>
        <Link href={buttonPath}>
        <Button label={buttonLabel} primary size='large' />
        </Link>
        </div>
      </div>
        
      </MainContainer>
    </div>
  )
}

export default Error404A