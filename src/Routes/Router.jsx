import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";

const router = createBrowserRouter(
    [
        {
            path: "/", element: <HomeLayouts></HomeLayouts>,
            children: [
                {
                    path: "", element: <Home></Home>
                },
                {
                    path: "categories/:id", element: <CategoryNews></CategoryNews>,
                    loader:()=>fetch('/news.json')
                }
            ]
        },
        {
            path: "auth", element: <AuthLayouts></AuthLayouts>
            ,
            children: [
                {
                   path:"/auth/login",element:<Login></Login>
                },
                {
                    path:"/auth/register",element:<Register></Register>
                }
            ]
         },
        { path: "news", element: <h2>news layout</h2> },
        { path: "/*", element: <h2>Error</h2> }
    ]
)

export default router;