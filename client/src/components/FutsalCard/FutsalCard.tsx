import { Card, Image } from 'antd'
import React from 'react'
import getImage from '../../utils/getImage'
import { Link } from 'react-router-dom'

const FutsalCard = (data:any) => {
    const futsal = data
    const noImage = 'https://imgs.search.brave.com/N3WfNHpXhtxnxMSKIw3htA1ksVdZ6hWK2h3hooHrwvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn'
  return (
    <Link to={`/futsals/${data?._id}`}>
    <div>
        <Card cover={<Image preview={false} style={{aspectRatio:'2/1'}} src={(futsal.image && getImage(futsal.image))||noImage} />}>
        <p><b>{futsal.name}</b></p>
        <p>{futsal.phonr}</p>
        </Card>
    </div>
    </Link>
  )
}

export default FutsalCard