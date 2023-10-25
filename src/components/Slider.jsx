import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider=({images})=>{
    return (
        <Carousel infiniteLoop={true} autoPlay={true} stopOnHover={true} interval={2000}>
         {images?.map((imgurl, index) => {
            return  <div key={index}>
                <img src={imgurl} />
            </div>
          })}
        </Carousel>
    );    
}

export default Slider;