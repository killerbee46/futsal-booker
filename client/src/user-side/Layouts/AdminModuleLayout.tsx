import { PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminModuleLayout = ({module,...rest}:any) => {
    const navigate = useNavigate()
    const onAdd = () => {
        navigate(`add`)
    }
  return (
    <>
    <Flex justify='space-between' align='center'>
            <Typography.Title level={2} style={{display:'flex',alignItems:"center", textTransform:'capitalize'}}>{module}<Button onClick={onAdd} className='button primary' icon={<PlusOutlined />} style={{textTransform:"uppercase",marginLeft:10, fontSize:16}} >Add</Button></Typography.Title> 
        <div>Space Bar</div>
    </Flex>
    <div>
        {rest.children}
    </div>
    </>
  )
}

export default AdminModuleLayout