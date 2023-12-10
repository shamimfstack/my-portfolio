import Navbar from "../Shared/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="menu w-full lg:w-1/4 border-r-2">
        <Navbar></Navbar>
      </div>
      
      <div className="main w-full lg:w-3/4">Main</div>
    </div>
  );
}
