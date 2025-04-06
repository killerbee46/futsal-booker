import { Button, Card, Flex, Image, Typography } from 'antd'
import React from 'react'
import getImage from '../../utils/getImage'
import { Link } from 'react-router-dom'

const FutsalCard = (data:any) => {
    const futsal = data
    const noImage = 'https://imgs.search.brave.com/N3WfNHpXhtxnxMSKIw3htA1ksVdZ6hWK2h3hooHrwvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn'
  return (
    <Link to={`/futsals/${data?._id}`}>
    <div>
        <Card className='rounded-lg group' cover={<Image className='rounded-se-lg rounded-ss-lg' preview={false} style={{aspectRatio:'2/1'}} src={(futsal.image && getImage(futsal.image))||noImage} />}>
        <Typography.Paragraph className='font-semibold'>{futsal.name}</Typography.Paragraph>
        <Typography.Paragraph className='text-slate-500 !text-xs my-1'>{futsal.location}</Typography.Paragraph>
        <Flex justify='space-between'>
        <Typography.Paragraph className=' !text-xs'>{futsal?.phone}</Typography.Paragraph>
        <Typography.Paragraph className=' !text-xs block group-hover:hidden'>{futsal?.rate || '1000'} /Hr</Typography.Paragraph>
        <div className='hidden group-hover:block -mt-5 '>
        <Link to={`/futsals/${futsal?._id}/book`}>
        <Button className="button success relative z-20 !rounded-md">Book Now</Button>
        </Link>
        </div>
        </Flex>
        </Card>
    </div>
    </Link>
  )
}

export default FutsalCard