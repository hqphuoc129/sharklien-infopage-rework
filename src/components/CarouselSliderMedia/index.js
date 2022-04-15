import React, {useState, useContext} from 'react';
import "antd/dist/antd.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Carousel } from "antd";
import {AppContext} from "./../../views/Media"; 

import thumbnails1 from './thumbnails/sharktank1.jpg';
import thumbnails2 from './thumbnails/sharktank2.jpg';
import thumbnails3 from './thumbnails/sharktank3.jpg';
import thumbnails4 from './thumbnails/sharktank4.jpg';
import thumbnails5 from './thumbnails/sharktank5.jpg';
import thumbnails6 from './thumbnails/sharktank6.jpg';
import thumbnails7 from './thumbnails/sharktank7.jpg';
import thumbnails8 from './thumbnails/sharktank8.jpg';
import thumbnails9 from './thumbnails/sharktank9.jpg';
import thumbnails10 from './thumbnails/sharktank10.jpg';
import thumbnails11 from './thumbnails/sharktank11.jpg';
import thumbnails12 from './thumbnails/sharktank12.jpg';
import thumbnails13 from './thumbnails/sharktank13.jpg';

const vid = [
    {
        image : thumbnails1,
        id : "snx67d4J42Q",
    
    }, 
    {
        image : thumbnails2,
        id : "iW8aGs5uOtw",
    }, 
    {
        image : thumbnails3,
        id : "ZcSuKkmxX0g",
    }, 
    {
        image : thumbnails4,
        id : "lgV-ies0FUc",
    }, 
    {
        image : thumbnails5,
        id : "rkrccP6_cP8",
    }, 
    {
        image : thumbnails6,
        id : "BaZxR_EUIOM",
    },
    {
        image : thumbnails7,
        id: "T1rFEsFlveI"
    },
    {
        image : thumbnails8,
        id: "t9nKmoTdfbw"
    },
    {
        image : thumbnails9,
        id: "ztHr2JzSoPc"
    },
    {
        image : thumbnails10,
        id: "jK_CMJSKo8E"
    },
    {
        image : thumbnails11,
        id: "VWW0OkxXjz4"
    },
    {
        image : thumbnails12,
        id: "JdY9MQXGMtk"   
    },
    {
        image : thumbnails13,
        id: "hvyPOrylF5E"
    },
]


export default function CarouselSliderMedia (props){

    const {state,setState}  = useContext(AppContext);
    return (
        <Carousel className="carousel-media" autoplay={props.pause} infinite={true} slidesToShow={3} centerMode={true} pauseOnHover={true} pauseOnFocus={true}>
            {vid.map ((items, inx) => 
            (<div key={inx} className="carousel-background ">
                <img src={items.image} onClick = {() => (setState({_id: items.id, isOpen: true, isnotpause: false}))}/> 
            </div> ))}
        </Carousel>
    )
}