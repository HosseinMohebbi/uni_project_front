import { Parallax } from 'react-parallax';
import aiImage from "../../assets/aiImage.jpg"
import "./ImageParallax.css"

const ImageParallax = (props) => (
    <Parallax bgImage={aiImage} strength={800} className='aiImage'>
        {props.children}
    </Parallax>
);

export default ImageParallax;