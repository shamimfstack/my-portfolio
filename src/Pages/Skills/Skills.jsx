import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import Tilt from "react-parallax-tilt";
import htmlLogo from '../../../public/html.png'
import cssLogo from '../../../public/css.png'
import jsLogo from '../../../public/js.png'
import bootstrapLogo from '../../../public/bootstrap.png'
import tailwindLogo from '../../../public/tailwindcss.png'
import reactLogo from '../../../public/react.png'
import firebaseLogo from '../../../public/firebase.png'
import nodeLogo from '../../../public/node.png'
import expressLogo from '../../../public/express.png'
import mongodbLogo from '../../../public/mongodb.png'


const Skills = () => {
  return (
    <div>
        <Helmet>
            <title>skills</title>
        </Helmet>
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/fpXXTdz/home-bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="pt-12">
            <Tilt>
              <div className="flex justify-center items-center">
                <SectionTitle heading={"Skills"}></SectionTitle>
              </div>
            </Tilt>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={htmlLogo} alt="" />
                <p className="font-bold">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={cssLogo} alt="" />
                <p className="font-bold">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={jsLogo} alt="" />
                <p className="font-bold">JavaScript</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={bootstrapLogo} alt="" />
                <p className="font-bold">Bootstrap</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={tailwindLogo} alt="" />
                <p className="font-bold">Tailwind CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={reactLogo} alt="" />
                <p className="font-bold">React</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={expressLogo} alt="" />
                <p className="font-bold">Express.JS</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={nodeLogo} alt="" />
                <p className="font-bold">Node.js</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-24" src={mongodbLogo} alt="" />
                <p className="font-bold">MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
