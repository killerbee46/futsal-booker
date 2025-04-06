import { Affix } from "antd";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import Nav4 from "../user-side/navbar/Nav4/Nav4";
import { colors } from "../themes/colors";
import MyFooter from "../components/Footer/Footer";

export const menus=  [
  { label: "Home", path: '/' },
  { label: "Futsals", path: '/futsals' },
  { label: "My Bookings", path: '/bookings' },
]

const MainLayout = (props: any) => {
  const { title, bannerData, tabFilter } = props
  document.title = (title ? (title + " | ") : "") + "Futsal Online"
  return (
    <div className="relative">
      <Content>
        <Layout>
            <Nav4
            tabFilter={tabFilter}
            backgroundColor={colors.navBarBg} 
            auth
            bannerData={bannerData}
            transparent={true}
              data={{
                menus:menus,
              }} />
          <div>
            {props.children}
          </div>
        </Layout>
      </Content>
          <Footer className="w-full !p-0">
          <MyFooter /> 
          </Footer>
    </div>
  );
};

export default MainLayout;
