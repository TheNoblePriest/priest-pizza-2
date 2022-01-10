import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-28 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        showIndicators={false}
        interval={2000}
      >
        <div>
          <img
            loading="lazy"
            src="https://media.istockphoto.com/vectors/best-italian-pizza-banner-with-ribbon-tomato-cheese-mozzarella-flour-vector-id1253496654?k=20&m=1253496654&s=170667a&w=0&h=RnlWrLTh386Gm18QnUmLKe3b47deOI9z1u37hMo_0gI= "
            alt="..."
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://media.istockphoto.com/vectors/horizontal-pizza-banner-with-mozzarella-slices-ketchup-tomato-vector-id1253087090"
            alt="..."
          />
        </div>
        <div>
          <img
            className=" object-contain"
            loading="lazy"
            src="https://designs.princesharma.in/wp-content/uploads/2021/08/Pizza-scaled.jpg"
            alt="..."
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

{
  /* react-responsive-carousel */
}
