import { Affix } from "antd";
import React from "react";
import Footer from "../components/NavBar/Footer";
import Layout, { Content } from "antd/es/layout/layout";
import NavBar from '../components/NavBar/NavBar';
import Nav1 from "../user-side/navbar/NAV1/Nav1";
import Nav2 from "../user-side/navbar/Nav2/Nav2";

const MainLayout = (props: any) => {
  document.title = (props?.title ? (props?.title + " | "):"")+"Futsal Online"
  return (
    <div>
      <Content>
        <Layout>
          <Affix offsetTop={0}>
            <Nav2 menus={[{label:"hello", path:'test'}]} />
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
