import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import './SocialLink.css';

export default function SocialLink(){
    return(
            <Space className='social-link'>
                <a href=""><FacebookOutlined/></a>
                <a href=""><TwitterOutlined/></a>
                <a href=""><InstagramOutlined/></a>
                <a href=""><LinkedinOutlined/></a>
            </Space>
            

    )
}