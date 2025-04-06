import { Col, Divider, Flex, Row, Space, Typography } from 'antd'
import Logo from '../Logo/Logo'
import MainContainer from '../../user-side/Maincontainer/Maincontainer'
import { MenuItemTypes } from '../../user-side/navbar/Navbar.types'
import { menus } from '../../Layouts/MainLayout'

const MyFooter = () => {
  return (
    <div className='bg-green-200 py-5'>
        <MainContainer>
        <Flex vertical align='center' gap={20}>
            <Logo />
            <Row justify={"end"} style={{ gap: 20 }} className="navMenu">
              {menus?.map((d: MenuItemTypes, i: number) => {
                return (
                  <Col key={i}>
                    <Typography.Link href={d?.path}>
                      <div
                        className={`!uppercase text-black hover:text-opacity-50 font-bold`}
                      >
                        {d?.label}
                      </div>
                    </Typography.Link>
                  </Col>
                );
              })}
            </Row>
        </Flex>
        <Divider />
        <Flex justify='space-between' align='flex-start'>
            <Typography.Paragraph>
            &copy; 2025 All Rights Reserved <strong>Futsal Nepal</strong>
            </Typography.Paragraph>
            <Space>
                <Typography.Link>Terms and Conditions</Typography.Link>
                <Typography.Link>Privacy Policy</Typography.Link>
            </Space>
        </Flex>
        </MainContainer>
    </div>
  )
}

export default MyFooter