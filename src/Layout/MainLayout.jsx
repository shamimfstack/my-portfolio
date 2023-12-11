import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
// import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Tilt from "react-parallax-tilt";

export default function MainLayout() {
  return (
    <div className="bg-green-100 min-h-[screen-calc(100vh-100px)]">
      {/* <Header></Header> */}
      <div className="flex flex-col lg:flex-row">
        <div className="menu w-full lg:w-2/6 border-r-2 space-y-8">
          <Tilt>
            <div className="flex justify-center items-center">
              <img
                className="w-52"
                src="https://i.ibb.co/L1Ykv2S/storyset-removebg-preview.png"
                alt=""
              />
            </div>
          </Tilt>
          
          <Navbar></Navbar>
        </div>

        <div className="main w-full lg:w-4/6 lg:w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
