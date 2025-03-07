import { Affix } from "antd";
import Footer from "../components/NavBar/Footer";
import Layout, { Content } from "antd/es/layout/layout";
import Nav4 from "../user-side/navbar/Nav4/Nav4";
import { colors } from "../themes/colors";

const MainLayout = (props: any) => {
  const { title, bannerData, tabFilter } = props
  document.title = (title ? (title + " | ") : "") + "Futsal Online"
  return (
    <div>
      <Content>
        <Layout>
            <Nav4
            tabFilter={tabFilter}
            backgroundColor={colors.navBarBg} 
            auth
            bannerData={bannerData}
            transparent={true}
              data={{
                menus: [
                  { label: "Home", path: '/' },
                  { label: "Futsals", path: '/futsals' },
                  { label: "My Bookings", path: '/bookings' },
                ],
              }} />
          <div>
            {props.children}
          </div>
          <Footer />
        </Layout>
      </Content>
    </div>
  );
};

export default MainLayout;
