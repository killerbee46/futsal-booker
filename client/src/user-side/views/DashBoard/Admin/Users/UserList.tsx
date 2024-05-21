import React from 'react'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteFutsal, getFutsals } from '../../../../../api/FutsalApi'
import { Table, Typography, message } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import TableAction from '../../../../components/TableAction/TableAction'
import AdminModuleLayout from '../../../../Layouts/AdminModuleLayout'
import { deleteUser, getUsers } from '../../../../../api/UserApis'

const UserList = () => {
  const {data, refetch} = useQuery({queryKey:['futsals'],queryFn:getUsers})
  const {mutate:userDelete, isSuccess:deleted} = useMutation({
    mutationFn:deleteUser,
    onSuccess:(res:any)=>{
      if(res.data.success){
        refetch()
        message.success(res.data.message)
      }
    }
  })

  const futsals = data?.data?.futsals
  const columns = [
    {
      title:"SN",
      dataIndex:'id',
      key:'id',
      render:(_,__,i)=>i+1
    },
    {
      title:"Name",
      dataIndex:'name',
      key:'name',
      render:(name,row,i)=><Typography.Link href={`${row?._id}`}>{name}</Typography.Link>
    },
    {
      title:"Location",
      dataIndex:'location',
      key:'location',
      // render:(_,__,i)=>i+1
    },
    {
      title:"Phone",
      dataIndex:'phone',
      key:'phone',
      render:(phone)=><Typography.Link href={`tel:${phone}`}>{phone}</Typography.Link>
    },
    {
      title:<SettingOutlined />,
      dataIndex:'_id',
      key:'_id',
      render:(id:any)=><TableAction
       id={id}
       deleteFunction={userDelete}
       deleted={deleted}
       module="futsal"
       />
    },
  ]
  return (
    <DashboardLayout title={"Users"}>
      <AdminModuleLayout module={'user'}>
      <Table dataSource={futsals} columns={columns} pagination={{hideOnSinglePage:true}} />
      </AdminModuleLayout>
    </DashboardLayout>
  )
}

export default UserList