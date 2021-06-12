import { Image } from 'antd';
import './Logo.css';

export default function Logo(){
    return(
        <a href="/"><Image preview={false} className="logo" src={process.env.PUBLIC_URL + '/logo.png'}/></a>
    );
}