import { PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar/SearchBar'

const AdminModuleLayout = ({ module, allowAdd=true, ...rest }: any) => {
  const navigate = useNavigate()
  const onAdd = () => {
    navigate(`add`)
  }
  return (
    <>
      <Flex justify='space-between' align='center'>
        <Space align='center'>
          <Typography.Title level={4} style={{ display: 'flex', alignItems: "center", textTransform: 'capitalize' }}>{module}</Typography.Title>
          {
            allowAdd &&
            <Button onClick={onAdd} className='button primary' icon={<PlusOutlined />} style={{ textTransform: "uppercase", marginLeft: 10 }} >Add</Button>
          }
        </Space>
        <SearchBar />
      </Flex>
      <div>
        {rest.children}
      </div>
    </>
  )
}

export default AdminModuleLayout