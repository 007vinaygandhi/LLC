import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            loading="lazy"
            src="https://img.freepik.com/free-vector/international-day-yoga-concept-gradient-banner-landing-page_143055-126.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.pinimg.com/originals/7e/37/90/7e379085de86883af55838165047fb3a.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://s3.envato.com/files/202557083/BEE-1658-Yoga%20&%20Fitness%20Banners_01_Preview4.jpg"
            alt=""
          />
        </div>
      </Carousel>
      <div className="mens_item">
        <div className="mens">
         
        </div>
      </div>
    </div>
    

    
  );
}

export default Banner;
