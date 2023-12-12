import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import figmaImg from '/figma.jpg'
import htmlImg from '/html-banner.jpg'
import reactImg from '/html-template.jpg'
import frontImg from '/front-end.jpg'
import backendImg from '/web-development.jpg'

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>services</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/fpXXTdz/home-bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content p-8">
          <div className="pt-12">
            <Tilt>
              <div className="flex justify-center items-center">
                <SectionTitle heading={"Services"}></SectionTitle>
              </div>
            </Tilt>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border p-5 rounded-xl">
                <img src={figmaImg} alt="" />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Figma to HTML</h3>
                  <p>
                    Convert your figma template to HTML. The HTML design will be fully
                    responsive.
                  </p>
                  <Link to="/contact">
                    <button className="btn btn-info btn-sm mt-4">Order Now</button>
                  </Link>
                </div>
              </div>
              <div className="border p-5 rounded-xl">
                <img src={htmlImg} alt="" />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">New HTML Template</h3>
                  <p>
                    Design your HTML template as your expectation. The design will be fully
                    responsive.
                  </p>
                  <Link to="/contact">
                    <button className="btn btn-info btn-sm mt-4">Order Now</button>
                  </Link>
                </div>
              </div>
              <div className="border p-5 rounded-xl">
                <img src={reactImg} alt="" />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">React Application</h3>
                  <p>
                    Make your application with react, and it will provide faster and better performance.
                  </p>
                  <Link to="/contact">
                    <button className="btn btn-info btn-sm mt-4">Order Now</button>
                  </Link>
                </div>
              </div>
              <div className="border p-5 rounded-xl">
                <img src={frontImg} alt="" />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Front End Development</h3>
                  <p>
                    Develop your front end with react, firebase for authentication, JWT for authorization.
                  </p>
                  <Link to="/contact">
                    <button className="btn btn-info btn-sm mt-4">Order Now</button>
                  </Link>
                </div>
              </div>
              <div className="border p-5 rounded-xl">
                <img src={backendImg} alt="" />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Back End Development</h3>
                  <p>
                    Develop your back end with express.js, node.js and mongodb
                  </p>
                  <Link to="/contact">
                    <button className="btn btn-info btn-sm mt-4">Order Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
