import { Affix, Layout } from 'antd';
import SideBar from '../Components/SideBar';
import { Outlet } from 'react-router-dom';

const { Content, Sider } = Layout;
const DashboardLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Affix>
        <Sider style={{ height: '100vh' }}>
          <SideBar />
        </Sider>
      </Affix>

      <Content style={{ paddingTop: '30px' }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default DashboardLayout;
