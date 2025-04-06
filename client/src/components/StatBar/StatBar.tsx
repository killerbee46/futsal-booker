import React from 'react'
import MainContainer from '../../user-side/Maincontainer/Maincontainer'
import { Flex, Image, Statistic, Typography } from 'antd'

const StatBar = () => {
  return (
    <div className='bg-[#357960] my-4 py-2 md:py-5'>
        <MainContainer>
            <Flex justify='space-evenly' align='center'>
                <Image src='/stat-cover.png' preview={false} />
                <Flex vertical align='center'>
                    <Typography.Paragraph className='text-2xl md:text-4xl text-white font-extrabold !m-0'>100+</Typography.Paragraph>
                    <Typography.Paragraph className='text=xl md:text-2xl text-white font-semibold'>Users</Typography.Paragraph>
                </Flex>
                <Flex vertical align='center'>
                    <Typography.Paragraph className='text-2xl md:text-4xl text-white font-extrabold !m-0'>50+</Typography.Paragraph>
                    <Typography.Paragraph className='text=xl md:text-2xl text-white font-semibold'>Futsals</Typography.Paragraph>
                </Flex>
                <Flex vertical align='center'>
                    <Typography.Paragraph className='text-2xl md:text-4xl text-white font-extrabold !m-0'>1000+</Typography.Paragraph>
                    <Typography.Paragraph className='text=xl md:text-2xl text-white font-semibold'>Bookings</Typography.Paragraph>
                </Flex>
            </Flex>
        </MainContainer>
    </div>
  )
}

export default StatBar