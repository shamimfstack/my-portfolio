import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../src/App.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectCard = ({
  image1,
  image2,
  image3,
  heading,
  description,
  githubURL,
  liveLink,
}) => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={image1} alt="slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slider image" />
        </SwiperSlide>
      </Swiper>
      <div className="space-y-3">
        <h3 className="text-xl font-bold">{heading}</h3>
        <p>{description}</p>
        <div className="flex justify-around">
          <Link to={githubURL}>
            <button className="btn btn-info btn-sm mt-4">Github Link</button>
          </Link>
          <Link to={liveLink}>
            <button className="btn btn-info btn-sm mt-4">Live Link</button>
          </Link>
        </div>
        <Link to="/contact">
          <button className="btn btn-info btn-sm mt-4 btn-block">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image1: PropTypes.object,
  image2: PropTypes.object,
  image3: PropTypes.object,
  heading: PropTypes.string,
  description: PropTypes.string,
  githubURL: PropTypes.string,
  liveLink: PropTypes.string,
};

export default ProjectCard;
