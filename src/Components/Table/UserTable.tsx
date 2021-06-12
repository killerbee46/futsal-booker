import { Table, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../Layouts/AdminLayout/AdminLayout";
import { fetchUser } from "../../Redux/UserRedux/UserActions";

export default function UserTable(props: any) {

    const { user } = props;

    const columns = [
        {
            title: 'Name',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Age',
            dataIndex: 'organizatinname',
            key: 'organizatinname',
        },
        {
            title: 'Address',
            dataIndex: 'level',
            key: 'level',
        },
    ];
    return (
        <div>
            <Typography.Title level={3}>Users List</Typography.Title>
            <Table dataSource={user} columns={columns} />
        </div>
    );
}