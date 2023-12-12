import { Helmet } from "react-helmet-async";
import Tilt from "react-parallax-tilt";
import skillsImg from '../../../public/skills.png'
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  return (
    <div className="">
      <Helmet>
        <title>about</title>
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
                <SectionTitle heading={"About Me"}></SectionTitle>
              </div>
            </Tilt>

            <div className="mt-5">
              <p className="text-left mb-5 indent-5">
                I am Shamim Ahammad, a promising and responsible MERN stack
                developer with six months of experience. I am comfortable with
                HTML, CSS, JavaScript, Tailwind CSS as the front end, Firebase
                as authentication, Express.js and Node.js as the server side,
                and MongoDB as the database. I have created a lot of projects
                based on these technologies.
              </p>
              <div>
                <p className="text-2xl text-left font-bold">Background</p>
                <p className="text-left indent-5">
                  I am a science background student. I always prefer technical
                  activities, like Web Development. I am working to be an
                  experienced web developer since two years. At this duration, I
                  have learned different technologies related to the web
                  development, such as, HTML, CSS, JavaScript, React. Last six
                  months, i was a trainee in a MERN Stack Development course,
                  and i have learned how to apply my knowledge in different
                  projects.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-2xl text-left font-bold">Education</p>
                <div className="flex flex-col-reverse md:flex-row justify-around items-center">
                  <div className="space-y-5 mt-3">
                    <div className="text-left">
                      <p className="text-xl underline">Bachelor of Science</p>
                      <div>
                        <p>University: National University</p>
                        <p>Passing year: 2008</p>
                        <p>Subject: Botany</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-xl underline">Master of Science</p>
                      <div>
                        <p>University: National University</p>
                        <p>Passing year: 2009</p>
                        <p>Subject: Botany</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="w-2/4" src="https://i.ibb.co/XW82pVf/4119036-removebg-preview.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-2xl text-left font-bold">Skills</p>
                <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="flex justify-center items-center">
                    <img className="w-2/4" src={skillsImg} alt="" />
                  </div>
                  <div className="space-y-5 mt-3">
                    <div className="text-left">
                      <p><span className="font-bold">Frontend:</span> HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React</p>
                      <p><span className="font-bold">Authentication:</span> Firebase</p>
                      <p><span className="font-bold">Backend:</span> Node.js, Express.js, MongoDB</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
