import { SRLWrapper } from "simple-react-lightbox";

import React, {useEffect} from "react";

const GalleryImage = (props) => {
    const options = {
    thumbnails: {
        showThumbnails: true,
    }
}

    useEffect(() => {

    },[props.data])
    return (
        <SRLWrapper options ={options}>
            {
            props.data.data?.filter(
                (link) => 
             link.collectionName === props.collectionName
            ).map(filtereditem => filtereditem.mediaList.map(item => (
                <img src={item} alt={item}/>
            )))
            }
        </SRLWrapper>
    )
}

export default GalleryImage;
