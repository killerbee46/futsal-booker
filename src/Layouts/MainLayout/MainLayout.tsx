import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import './MainLayout.css';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default function MainLayout(props:any){
    return(
        <Layout>
            <Content style={{padding:0}}>
                <div className="mainheader"><Header/></div>
                <div className="maincontent">{props.children}</div>
                <div className="mainfooter"><Footer/></div>  
            </Content>

        </Layout>
        
    );
}