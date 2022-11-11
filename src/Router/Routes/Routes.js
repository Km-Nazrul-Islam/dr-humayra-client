import { createBrowserRouter } from "react-router-dom";
import Details from "../../Details/Details";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/Details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://dr-munni-server-site.vercel.app/services/${params.id}`)
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;