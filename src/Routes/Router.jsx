import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";

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
        { path: "auth", element: <h2>Authentication layout</h2> },
        { path: "news", element: <h2>news layout</h2> },
        { path: "/*", element: <h2>Error</h2> }
    ]
)

export default router;