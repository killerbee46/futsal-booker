import { Carousel, Image } from "antd";
import './Banner.css';

export default function Banner() {
    const slider=[
        'https://cdn.wallpapersafari.com/73/1/6kYwyR.jpg',
        'https://wallpaperaccess.com/full/1884509.jpg',
        'https://wallpaperaccess.com/full/1884497.jpg',
        'https://www.teahub.io/photos/full/3-35374_football-wallpapers-hd-football-wallpaper-hd.jpg'
    ];
    const banner = slider.map((data) =>
    <Image className='banner' preview={false} src={data} />
    );
    return (
        <Carousel autoplay effect='fade' className='carousel'>
                {banner}
        </Carousel>
    );
}