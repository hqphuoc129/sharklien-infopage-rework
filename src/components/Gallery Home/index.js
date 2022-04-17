import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'App.scss'
import { Image } from 'antd';
import Background from './assets/background.png'; 
import Button from 'react-bootstrap/Button';
import {webContext} from '../../App';
import {Link} from 'react-router-dom';
import Img1 from './assets/img1.png';
import Img2 from './assets/img2.png';
import Img3 from './assets/img3.png';
import Img4 from './assets/img4.png';
import Img5 from './assets/img5.png';

function Gallery() {
    const {isActive, setIsActive} = useContext(webContext)
  return (
    <>
    <div className='gallery_container'>
        <img className='gallery_backround' src = {Background}/>
            <ul className='gallery_list'>
            <Image.PreviewGroup>
                <li className='gallery_item'>
                    <Image src={Img1}/>
                </li>       
                <li className='gallery_item'>
                    <Image src={Img2}/>
                </li>
                <li className='gallery_item'>
                    <Image src={Img3}/>
                </li>
                <li className='gallery_item'>
                    <Image src={Img4}/>
                </li>
                <li className='gallery_item'>
                    <Image src={Img5}/>
                </li>     
            </Image.PreviewGroup>   
            </ul>
        <div className="gallery_media_button_container"> 
            <Link
                to='/media'
                className= {isActive === 'home' ? 'nav active' : ''}
                onClick={() => {
                    setIsActive('media');
                    window.scrollTo(0,0);
                  }}
            >
                <Button variant="outline-warning" style={{backgroundColor:"white"}}>Xem thêm tại Media</Button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Gallery;