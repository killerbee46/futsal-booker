
import { useMutation, useQuery } from '@tanstack/react-query'
import { Table, Typography, message } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { deleteFutsal, getFutsals, getFutsalsByOwner } from '../../../api/FutsalApi'
import TableAction from '../../../components/TableAction/TableAction'
import AdminModuleLayout from '../../../Layouts/AdminModuleLayout'
import DashboardLayout from '../../../Layouts/DashboardLayout'
import { localUser } from '../../../api/AuthApi'

const FutsalOwnerControlPage = () => {
    const user = localUser()
  const {data, refetch} = useQuery({queryKey:['my-futsals',{owner:user?._id}],queryFn:getFutsalsByOwner})
  const {mutate:futsalDelete, isSuccess:deleted} = useMutation({
    mutationFn:deleteFutsal,
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
      render:(name,row,i)=><Typography.Link href={`futsals/${row?._id}/edit`}>{name}</Typography.Link>
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
       deleteFunction={futsalDelete}
       deleted={deleted}
       module="futsal"
       />
    },
  ]
  return (
    <DashboardLayout title={"Futsals"}>
      <AdminModuleLayout module={'my futsals'}>
      <Table dataSource={futsals} columns={columns} pagination={{hideOnSinglePage:true}} />
      </AdminModuleLayout>
    </DashboardLayout>
  )
}

export default FutsalOwnerControlPage