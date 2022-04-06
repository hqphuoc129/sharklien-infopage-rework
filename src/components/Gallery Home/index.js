import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'App.scss'
import { Image } from 'antd';
import Background from './assets/background.png'
import Img1 from './assets/img1.png';
import Img2 from './assets/img2.png';
import Img3 from './assets/img3.png';
import Img4 from './assets/img4.png';
import Img5 from './assets/img5.png';

function Gallery() {
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
    </div>
    </>
  )
}

export default Gallery;