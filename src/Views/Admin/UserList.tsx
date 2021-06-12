import { BankOutlined, MedicineBoxOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Col, Row, Button, Typography, Divider} from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../Redux/UserRedux/UserActions';
import UserItem from '../../Components/UserItem/UserItem';
import AdminLayout from '../../Layouts/AdminLayout/AdminLayout';

export const UserList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser({}));
	}, []);
	const users = useSelector((state: any) => state.UserReducer);
	return (
      <AdminLayout>
        <Row justify='space-between'>
          <Col><Typography.Title level={3}>Users List</Typography.Title></Col>
          <Col><a href="/register"><Button type='primary'><PlusCircleOutlined/>Add User</Button></a></Col>
        </Row>
        <Divider/>
								<table style={{width:'100%',fontSize:'1.2em'}}>
			<tr>
				<th>Organization Name</th>
				<th>Level</th>
				<th>Category</th>
			</tr>
			{users.list?.map((data: any, index: number) => {
				return <UserItem user={data} />;
			})}
		</table>
      </AdminLayout>

	);
};

export default UserList;
