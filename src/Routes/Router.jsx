import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";
import NewsDetails from "../Components/Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Components/Pages/Loading";

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
                    loader: () => fetch('/news.json'),
                    hydrateFallbackElement: <Loading></Loading>
                }
            ]
        },
        {
            path: "auth", element: <AuthLayouts></AuthLayouts>
            ,
            children: [
                {
                    path: "/auth/login", element: <Login></Login>
                },
                {
                    path: "/auth/register", element: <Register></Register>
                }
            ]
        },
        {
            path: "news-details/:id",
            loader: () => fetch('/public/news.json'),
            hydrateFallbackElement: <Loading></Loading>,
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        },

        {
            path: "/*",
            element: <h2>Error</h2>
        }
    ]
)

export default router;