import React, {useState} from 'react';
import "antd/dist/antd.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Carousel } from "antd";

import thumbnails1 from './thumbnails/sharktank1.jpg';
import thumbnails2 from './thumbnails/sharktank2.jpg';
import thumbnails3 from './thumbnails/sharktank3.jpg';
import thumbnails4 from './thumbnails/sharktank4.jpg';
import thumbnails5 from './thumbnails/sharktank5.jpg';
import thumbnails6 from './thumbnails/sharktank6.jpg';

const uniqueID =  ["snx67d4J42Q","iW8aGs5uOtw","ZcSuKkmxX0g", "lgV-ies0FUc","rkrccP6_cP8","BaZxR_EUIOM"]
const list_thumnb = [thumbnails1,thumbnails2,thumbnails3,thumbnails4,thumbnails5,thumbnails6]
export default function CarouselSliderMedia (){

    const [isOpen, setIsopen] = useState(false)
    return (
        <Carousel autoplay slidesToShow={4} centerMode={true} pauseOnHover={true} pauseOnFocus={true}>
            {list_thumnb.map ((items, inx) => 
            (<div>
                    <ModalVideo
                        channel= "youtube"
                        isOpen = {isOpen}
                        videoId ="snx67d4J42Q"
                        allowFullScreen= {true}
                        onClose = { () => (setIsopen(!isOpen))}
                        /> 
                    <img key={inx} src={items} onClick = {() => {setIsopen(!isOpen)}}/> 
            </div> ))}
        </Carousel>
    )
}