import {
    AimOutlined,
    DashboardFilled,
    FileSyncOutlined,
    MessageOutlined,
    ProfileOutlined,
    SettingOutlined,
    HomeOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import './Sidebar.css';

  export const Sidebar = () => {
    // const history = useHistory();
    // const onMenuClick = (value: any) => {
    //   history.push("/" + value.keyPath.reverse().join("/"));
    // };
  
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        // onClick={onMenuClick}
        style={{height:'90vh'}}
      >
        <Menu.Item key="admin" icon={<DashboardFilled />}><a href="/admin">Dashboard</a></Menu.Item>
        <Menu.Item key="users" icon={<UserOutlined />}>
        <a href="/users">Users</a>
        </Menu.Item>
        <Menu.Item key="bookings" icon={<ProfileOutlined />}>
        <a href="/bookings">Booking List</a>
        </Menu.Item>
        <Menu.Item key="booking-control" icon={<SettingOutlined />}>
        <a href="/booking-control">Booking Control</a>
        </Menu.Item>
        <Menu.Item key="user-profile" icon={<SettingOutlined />}>
        <a href="/user-profile">View Profile</a>
        </Menu.Item>
        <Menu.Item key="booking-control">
        <a href="/" style={{backgroundColor:'cyan',padding:10,color:'black',margin:10}}><HomeOutlined />Back To Site</a>
        </Menu.Item>
         {/* <Menu.ItemGroup key="organization" title="ORGANIZATION"> */}
        {/* </Menu.ItemGroup> */}
      </Menu>
    );
  };
  
  export default Sidebar;  