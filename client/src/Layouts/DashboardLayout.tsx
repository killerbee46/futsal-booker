import React, { useState } from 'react';
import { Layout, Spin, theme } from 'antd';
import Logo from '../components/Logo/Logo';
import DashboardMenus from '../components/DashboardMenus/DashboardMenus';

const { Header, Content, Sider } = Layout;


const DashboardLayout= (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  document.title = `${props?.title || "Dashboard"} | Futsal Online`

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className='sticky top-0 left-0 bottom-0 h-[100vh] overflow-hidden' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" style={{ padding: 20 }}>
          <Logo withText={!collapsed} width="100%" />
        </div>
        <div className='overflow-y-auto'> 
        <DashboardMenus />
        </div>
      </Sider>
      <Layout>
        <Header className='sticky top-0 z-20' style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '20px 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {
              props?.loading ?
              //loading screen
              <Spin /> :
              props?.children
            }
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;