import React, { useState } from 'react';
import {
  DashboardOutlined,
  EnvironmentOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Spin, theme } from 'antd';
import Logo from '../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', 'dashboard', <DashboardOutlined />),
  getItem('Futsal', 'dashboard/futsal', <EnvironmentOutlined />,[
    getItem('List', '', <UnorderedListOutlined />),
    getItem('Add', 'add', <PlusOutlined />),
  ]
),
  // getItem('Option 1', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];

const DashboardLayout= (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const currentMenu = window.location.pathname.slice(1,window.location.pathname.length)
  const navigate = useNavigate()
  const onMenuClick = (e) => {
    navigate(`/${(e.keyPath?.reverse()?.join('/'))}`)
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" style={{ padding: 20 }}>
          <Logo withText={!collapsed} width="100%" />
        </div>
        <Menu activeKey={currentMenu} onClick={onMenuClick} theme="dark" defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
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