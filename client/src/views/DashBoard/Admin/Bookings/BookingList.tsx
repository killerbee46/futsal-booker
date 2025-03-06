import DashboardLayout from '../../../../Layouts/DashboardLayout'
import { useQuery } from '@tanstack/react-query'
import { Table, Tag, Typography } from 'antd'
import AdminModuleLayout from '../../../../Layouts/AdminModuleLayout'
import { getBookings } from '../../../../api/BookingApi'
import dayjs from 'dayjs'
import { time } from '../../../../components/TimeTable/TimeTable'

const BookingList = () => {
  const {data, refetch} = useQuery({queryKey:['bookings'],queryFn:getBookings})
  // const {mutate:userDelete, isSuccess:deleted} = useMutation({
  //   mutationFn:deleteUser,
  //   onSuccess:(res:any)=>{
  //     if(res.data.success){
  //       refetch()
  //       message.success(res.data.message)
  //     }
  //   }
  // })

  const bookings = data?.data?.bookings
  
  const columns = [
    {
      title:"SN",
      dataIndex:'id',
      key:'id',
      render:(_:any,__:any,i:number)=>i+1
    },
    {
      title:"Booked By",
      dataIndex:'booker',
      key:'name',
      render:(name:any, row:any)=><Typography.Link href={`/dashboard/users/${row?._id}/edit`}>{name?.name}</Typography.Link>
    },
    {
      title:"Futsal",
      dataIndex:'futsal',
      key:'name',
      render:(name:any, row:any)=><Typography.Link href={`/dashboard/futsals/${row?._id}/edit`}>{name?.name}</Typography.Link>
    },
    {
      title:"Date",
      dataIndex:'date',
      key:'date',
      render:(name:any)=><Typography.Paragraph>{dayjs(name)?.format("DD MMM, YYYY")}</Typography.Paragraph>
    },
    {
      title:"Time",
      dataIndex:'time',
      key:'time',
      render:(name:any, row:any)=>{
        const bookTime = time?.find((f)=> f.key === name)
        return <Tag color={row?.status === "Booked" ? "green" : 'red'}>{bookTime?.start + " - " + bookTime?.end}</Tag>
      }
    },
    // {
    //   title:<SettingOutlined />,
    //   dataIndex:'_id',
    //   key:'_id',
    //   render:(id:any)=><TableAction
    //    id={id}
    //    deleteFunction={userDelete}
    //    deleted={deleted}
    //    module="user"
    //    />
    // },
  ]
  return (
    <DashboardLayout title={"Bookings"}>
      <AdminModuleLayout module={'bookings'} allowAdd={false}>
      <Table dataSource={bookings} columns={columns} pagination={{hideOnSinglePage:true}} />
      </AdminModuleLayout>
    </DashboardLayout>
  )
}

export default BookingList