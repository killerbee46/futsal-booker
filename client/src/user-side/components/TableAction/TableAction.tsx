import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Popconfirm, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const TableAction = ({id,deleteFunction=()=>{},modules,deleted}:any) => {
    const navigate = useNavigate()
    const onEdit = () => {
        navigate(`${id}/edit`)
    }
    const onDelete = () => {
        deleteFunction(id)
    }
  return (
    <Space>
        <Button className='button primary' onClick={onEdit} icon={<EditOutlined />} />
        <Popconfirm title={"Confirm Delete ?"} onConfirm={onDelete}>
        <Button className='button danger' icon={<DeleteOutlined />} />
        </Popconfirm>
    </Space>
  )
}

export default TableAction