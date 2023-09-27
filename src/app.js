import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

// instead of this - 
// import Instamart from "./components/Instamart";
// do - code spliting, lazy loading, chunking, dynamic bundling

const Instamart = lazy( () => import('./components/Instamart'));
// upon render -> react will suspend the loading 

// import * as myComponent from "./components"

const AppLayout = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />    
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children:[
                    {
                        path:'profile', //No need to pass '/'
                        element:<Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/Instamart',
                element: 
                <Suspense fallback={<Shimmer/>}>
                    <Instamart />
                </Suspense>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(appLayout());
root.render(<RouterProvider router={appRouter} />);