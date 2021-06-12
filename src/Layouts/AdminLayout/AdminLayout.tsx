import { Row, Col, Layout } from "antd";
import Cards from "../../Components/Card/Card";
import AdminHeader from "../../Components/Header/AdminNav/AdminHeader";
import Sidebar from "../../Layouts/AdminLayout/Sidebar";

export default function AdminLayout(props:any){
    return(
        <Layout>
        <Row>
                <AdminHeader/>
            </Row>
            <Row gutter={10} style={{width:'100vw'}}>
                <Col span={4}><Sidebar/> </Col>
                <Col span={20} style={{padding:'20px'}}>
                    <Cards>{props.children}</Cards>
                </Col>
            </Row>
            </Layout>
    );
}