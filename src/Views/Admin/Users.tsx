import { BankOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import { Col, Row, Table, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../Redux/UserRedux/UserActions';
import UserTable from '../../Components/Table/UserTable';

export const Users = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser({}));
	}, []);
	const users = useSelector((state: any) => state.UserReducer);
	const userdata =  users.map((data:any,index:number)=>{
		return data;
	});
	const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
	return (
			

<Table dataSource={userdata} columns={columns} />

	);
};

export default Users;
