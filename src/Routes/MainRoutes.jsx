import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects/Projects";
import Contact from "../Pages/Contact/Contact/Contact";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'skills',
                element: <Skills></Skills>
            },
            {
                path: 'projects',
                element: <Projects></Projects>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
        ]
    }
])

export default MainRoutes;
