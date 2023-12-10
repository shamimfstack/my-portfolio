import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";

export default function MainLayout() {
  return (
    <div className="bg-green-100">
      <Header></Header>
      <div className="flex flex-col lg:flex-row">
        <div className="menu w-full md:w-2/6 lg:w-1/4 border-r-2 p-4 space-y-8">
          <div className="flex justify-center items-center">
            <img
              className="w-1/2 rounded-full"
              src="https://i.ibb.co/BcmtY3Q/shamim.jpg"
              alt="portfolio-image"
            />
          </div>
          <div className="divider"></div>
          <Navbar></Navbar>
        </div>

        <div className="main w-full md:w-4/6 lg:w-3/4 p-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
