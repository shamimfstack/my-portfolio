import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Tilt from "react-parallax-tilt";

export default function MainLayout() {
  return (
    <div className="bg-green-100 min-h-[screen-calc(100vh-100px)]">
      <Header></Header>
      <div className="flex flex-col md:flex-row">
        <div className="menu w-full md:w-3/12 bg-[#78e0ed]">
          <div className="">
            <Tilt>
              <div className="hidden md:flex justify-center items-center">
                <img
                  className="w-52"
                  src="https://i.ibb.co/L1Ykv2S/storyset-removebg-preview.png"
                  alt=""
                />
              </div>
            </Tilt>
          </div>
          <div className="">
            <Navbar></Navbar>
          </div>
        </div>

        <div className="main w-full md:w-9/12">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
