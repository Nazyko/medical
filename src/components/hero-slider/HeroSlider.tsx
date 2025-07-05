import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css"

import img1 from "../../assets/hero-slider/Rectangle 7.svg";
import img2 from "../../assets/hero-slider/Rectangle 12.svg";
import img3 from "../../assets/hero-slider/Rectangle 13.svg";
import img4 from "../../assets/hero-slider/Rectangle 13.svg";


export const HeroSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [img1, img2, img3, img4];

  return (
    <div className="">
       <div className="slider-container hero-slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="hero-slide-item">
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
