import React, {useEffect,useState,createContext} from "react";
import Slider from "react-slick";

//Test fetch api 
import {getData} from "../../actions/index"; 


import "lightgallery.js/dist/css/lightgallery.css";

import {useDispatch,useSelector}from 'react-redux';
import {useLightgallery} from 'react-lightgallery';
import GalleryImage from './GalleryImage';

//import GalleryContainer from "./GalleryContainer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {Carousel} from "react-responsive-carousel";


export const Context = createContext()

const CustomSlider = (props) => {

  const [collect , setCollect] = useState("")
  const { openGallery } =useLightgallery();
  const dispatch = useDispatch();
  //Test fetch by redux
  useEffect( () => {
    dispatch(getData("https://sharklien-backend.herokuapp.com/api/media/get-all-media-collection/image"));  
        }
  ,[])


  const data = useSelector(state => state.fetch);
  
  const the_data = data

  //{console.log(data.data)}      

      return (
        <>
        <Context.Provider value={{collect, setCollect}}>
        <Carousel infiniteLoop autoPlay width="70%" centerMode stopOnHover >
          {
          the_data.data?.map((items) => (
          <div key= {items.id} className="img_container" >
            <img className="img_caur" src= {items.mediaList[0]} alt= {items.collectionName} />
            {console.log(collect)}
            <div className="div-hover" onClick={() => ( openGallery(items.collectionName), setCollect(items.collectionName))}>
              <h2 className="title-collection">{items.collectionName}</h2>
              <h2 className="numimg-collection">+ {items.mediaList.length}</h2>
            </div>
          </div>
          ))
          }
        </Carousel>
        <div style={{ display:"none" }}>
           {the_data.data?.map( filtered => 
                (filtered.mediaList.map((l, i) => 
                    <GalleryImage key ={i} image={l} thumb={l} group={filtered.collectionName} />
                ))
            )}
        </div>
        </Context.Provider> 
        </>)

}
export default CustomSlider;