import CarouselSliderVideo from 'components/CarouselSliderVideo';
import React, {useState,  useContext, createContext} from 'react';
import "antd/dist/antd.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Carousel } from "antd";

export const AppContext = createContext(null); 

const CarouselSlideContainer = (props) => {
    const  [state, setState] = useState({
      _id: "",
      isnotpause: true,
      isOpen: false,
  })
    
    return <>
        <div className="index-combine-title spacecing">{props.title}</div>
        <AppContext.Provider value={{state, setState}}>
          <CarouselSliderVideo pause={state.isnotpause} data= {props.vidlist} class={props.linkClass} num={props.totalNum}/>
          <ModalVideo
                          channel= "youtube"
                          isOpen = {state.isOpen}
                          videoId ={state._id}
                          allowFullScreen
                          onClose = {() => (setState({isOpen : false, isnotpause : true}))}
                          /> 
        </AppContext.Provider>
    </>
}

export default CarouselSlideContainer;