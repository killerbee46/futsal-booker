import { useQuery } from '@tanstack/react-query'
import { Button, Card, Flex, Table, Typography } from 'antd'
import React from 'react'
import { getUsers } from '../../api/UserApis'
import { useNavigate } from 'react-router-dom'

const UserRequestsCard = () => {
    const navigate = useNavigate()
    const { data } = useQuery({ queryKey: ['users'], queryFn: getUsers })

    const users = data?.data?.data
    const columns = [
        {
            title: "SN",
            dataIndex: 'id',
            key: 'id',
            render: (_, __, i) => i + 1
        },
        {
            title: "Name",
            dataIndex: 'name',
            key: 'name',
            render: (name, row, i) => <Typography.Link href={`/dashboard/users/${row?._id}`}>{name}</Typography.Link>
        },
        // {
        //   title:"Address",
        //   dataIndex:'address',
        //   key:'address'
        // },
        {
            title: "Email",
            dataIndex: 'email',
            key: 'email',
            render: (email) => <Typography.Link href={`mailto:${email}`}>{email}</Typography.Link>
        },
        {
            title: "Phone",
            dataIndex: 'phone',
            key: 'phone',
            render: (phone) => <Typography.Link href={`tel:${phone}`}>{phone}</Typography.Link>
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
        <Card title={
            <Flex align='center' justify='space-between'>
                <p>Pending User Requests</p>
                <Button onClick={() => navigate("users?status=pending")}>View All</Button>
            </Flex>
        } className='card nopadding'>
            <Table dataSource={users} columns={columns} pagination={false} />
        </Card>
    )
}

export default UserRequestsCard