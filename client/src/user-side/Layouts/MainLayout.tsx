import { Affix } from "antd";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/NavBar/Footer";
import Layout, { Content } from "antd/es/layout/layout";

const MainLayout = (props: any) => {
  return (
    <div>
      <Content>
        <Layout>
          <Affix offsetTop={0}>
            <NavBar />
          </Affix>
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
