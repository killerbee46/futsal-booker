import { Row, Col, Typography, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { modules } from '../../Utils/modules';
function SideBar() {
  const navigate = useNavigate();
  const handleClick = (value: any) => {
    navigate(`/${value?.key}`);
  };
  return (
    <Row style={{ marginTop: 10 }}>
      <Col style={{ width: '100%', height: '100vh' }}>
        <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <Typography.Title level={3} style={{ textAlign: 'center' }}>
            {/* <img src={isCollapsed ? LogoIcon : Logo} alt="logo" /> */}
          </Typography.Title>
        </div>
        <Menu
          mode="inline"
          onClick={handleClick}
          defaultSelectedKeys={['']}
          style={{ height: '100%' }}
        >
          <Menu.Item key="">Overview</Menu.Item>
          {modules?.length > 0 &&
            modules?.map(item => {
              return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
            })}
          <div style={{ paddingLeft: 20 }}>
            <h3>Admin</h3>
          </div>
          <Menu.Item key="settings">Settings</Menu.Item>
          <Menu.Item key="add-modules">Add Modules</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}

export default SideBar;
