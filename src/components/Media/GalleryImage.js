import React from 'react';
import {LightgalleryItem} from 'react-lightgallery';

const GalleryImage = ({image, thumb, group}) => {
    return (
    <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%" }} />
    </LightgalleryItem>
    </div>
    )
}

export default GalleryImage;