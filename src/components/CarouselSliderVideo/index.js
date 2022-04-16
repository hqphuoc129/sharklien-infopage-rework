import React, {useState, useContext} from 'react';
import "antd/dist/antd.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

import {isMobile} from "react-device-detect";
import { Carousel } from "antd";
import {AppContext} from "./../CarouselSliderContainer"; 

export default function CarouselSliderVideo (props){

    const {state,setState}  = useContext(AppContext);
    if  (isMobile) {
    return (
        <Carousel className={props.class} autoplay={props.pause} infinite={true} slidesToShow={1} centerMode={true} pauseOnHover={true} pauseOnFocus={true}>
            {props.data.map ((items, inx) => 
            (<div key={inx} className="carousel-background ">
                <img src={items.image} onClick = {() => (setState({_id: items.id, isOpen: true, isnotpause: false}))}/> 
            </div> ))}
        </Carousel>
    )
    }
    return (
        <Carousel className={props.class} autoplay={props.pause} infinite={true} slidesToShow={props.num} centerMode={true} pauseOnHover={true} pauseOnFocus={true}>
            {props.data.map ((items, inx) => 
            (<div key={inx} className="carousel-background ">
                <img src={items.image} onClick = {() => (setState({_id: items.id, isOpen: true, isnotpause: false}))}/> 
            </div> ))}
        </Carousel>
    )
}