import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import Tilt from "react-parallax-tilt";
import ProjectCard from "../../../components/ProjectCard";
import figmaImg1 from "/figma1.png";
import figmaImg2 from "/figma2.png";
import figmaImg3 from "/figma3.png";
import responsiveImg1 from "/responsive1.png";
import responsiveImg2 from "/responsive2.png";
import responsiveImg3 from "/responsive3.png";
import apiImg1 from "/api1.png";
import apiImg2 from "/api2.png";
import apiImg3 from "/api3.png";
import developmentImg1 from "/develop1.png";
import developmentImg2 from "/develop2.png";
import developmentImg3 from "/develop3.png";

const Projects = () => {
  // figma site link
  const figmaGithubURL = "https://github.com/shamimfstack/flower-shop-assignment"
  const figmaLiveURL = "https://shamimfstack.github.io/flower-shop-assignment/"

  // figma site link
  const responsiveGithubURL = "https://github.com/shamimfstack/Gamer-Zone-Assignment-2"
  const responsiveLiveURL = "https://shamimfstack.github.io/Gamer-Zone-Assignment-2/"

  // figma site link
  const apiGithubURL = "https://github.com/programming-hero-web-course1/b8a6-build-phtube-shamimfstack"
  const apiLiveURL = "https://grumpy-cause.surge.sh/"

  // figma site link
  const developmentGithubURL = "https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-shamimfstack"
  const developmentLiveURL = "https://mod-auth-4.web.app/"


  return (
    <div>
      <Helmet>
        <title>projects</title>
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
                <SectionTitle heading={"Projects"}></SectionTitle>
              </div>
            </Tilt>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border p-5 rounded-xl">
                <ProjectCard
                  image1={figmaImg1}
                  image2={figmaImg2}
                  image3={figmaImg3}
                  githubURL = {figmaGithubURL}
                  liveLink = {figmaLiveURL}
                  heading={"Figma to HTML"}
                  description={
                    "Convert your figma template to HTML. The HTML design will be fully responsive."
                  }
                ></ProjectCard>
              </div>
              <div className="border p-5 rounded-xl">
                <ProjectCard
                  image1={responsiveImg1}
                  image2={responsiveImg2}
                  image3={responsiveImg3}
                  githubURL = {responsiveGithubURL}
                  liveLink = {responsiveLiveURL}
                  heading={"Responsive Website"}
                  description={
                    "Design your website as your expectation. The design will be fully responsive."
                  }
                ></ProjectCard>
              </div>
              <div className="border p-5 rounded-xl">
                <ProjectCard
                  image1={apiImg1}
                  image2={apiImg2}
                  image3={apiImg3}
                  githubURL = {apiGithubURL}
                  liveLink = {apiLiveURL}
                  heading={"API based data"}
                  description={
                    "Build your application and fetch data from API. You will provide the API or I will build the API"
                  }
                ></ProjectCard>
              </div>
              <div className="border p-5 rounded-xl">
                <ProjectCard
                  image1={developmentImg1}
                  image2={developmentImg2}
                  image3={developmentImg3}
                  githubURL = {developmentGithubURL}
                  liveLink = {developmentLiveURL}
                  heading={"Full Stack Development"}
                  description={
                    "Develop your Full Stack Application with Database, Authentication, and Authorization"
                  }
                ></ProjectCard>
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
