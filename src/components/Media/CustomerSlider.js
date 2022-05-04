import React, {useEffect } from "react";
import Slider from "react-slick";

//Test fetch api 
import {getData} from "../../actions/index"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {useDispatch,useSelector}from 'react-redux';

import { SRLWrapper,useLightbox } from "simple-react-lightbox";

import GalleryImage from "./GalleryImage";
const CustomSlider = (props) => {

  const {openLightbox, closeLightbox} = useLightbox();
  const dispatch = useDispatch();
  //Test fetch by redux
  useEffect( () => {
    dispatch(getData("https://sharklien-backend.herokuapp.com/api/media/get-all-media-collection/image")); 
     
        }
  ,[])

  
  const data = useSelector(state => state.fetch);

  {console.log(data.data)}      

      return (
        <Carousel infiniteLoop autoPlay width="70%" centerMode stopOnHover>
          {
          data.data?.map((items) => (
          <div key= {items.id} className="img_container" >
            <img className="img_caur" src= {items.mediaList[0]} alt= {items.collectionName} />
            <div className="div-hover" onClick={() => openLightbox()}>
              <h2 className="title-collection">{items.collectionName}</h2>
              <h2 className="numimg-collection">+ {items.mediaList.length}</h2>
            </div>
            <div style={{display: "none"}}>
            <GalleryImage data={items.mediaList} />
            </div>
          </div>
      ))}
        </Carousel>
      )

}
export default CustomSlider;