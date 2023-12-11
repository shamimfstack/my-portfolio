import { Helmet } from "react-helmet-async";
import Tilt from "react-parallax-tilt";

const Home = () => {
  const handleDownloadResume = (
    filePath,
    fileName = "shamim's_resume.pdf",
  ) => {
    fetch('https://drive.google.com/file/d/1Y6mr36v6sFlDjdkmCyN77thRWn0k6ofo/view?usp=sharing' + filePath, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);
      });
  };


  return (
    <div>
      <Helmet>
        <title>homepage</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/fpXXTdz/home-bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <Tilt>
              <div className="flex justify-center items-center">
                <img
                  className="w-2/3 md:w-1/3 rounded-full"
                  src="https://i.ibb.co/BcmtY3Q/shamim.jpg"
                  alt="portfolio-image"
                />
              </div>
            </Tilt>
            
            <div className="mt-5">
              <p className="text-left">Hello there,</p>
              <p className="text-left mb-5 indent-5">
                I am Shamim Ahammad, a promising and responsible MERN stack
                developer with six months of experience. I am comfortable with
                HTML, CSS, JavaScript, Tailwind CSS as the front end, Firebase
                as authentication, Express.js and Node.js as the server side,
                and MongoDB as the database. I have created a lot of projects
                based on these technologies.
              </p>
            </div>
            <button onClick={handleDownloadResume} className="btn btn-info">Download My Resume</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
