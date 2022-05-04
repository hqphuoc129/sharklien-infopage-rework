import { SRLWrapper } from "simple-react-lightbox";

const GalleryImage = (props) => {
    return (
        <SRLWrapper>
            {props.data.map((link) => (
              <img src={link} alt={link} />
            ))}
        </SRLWrapper>
    )
}

export default GalleryImage;
