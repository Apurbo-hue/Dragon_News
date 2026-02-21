import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter(
    [
        { path: "/", element: <HomeLayouts></HomeLayouts> },
        { path: "auth", element: <h2>Authentication layout</h2> },
        { path: "news", element: <h2>news layout</h2> },
        {path:"/*",element:<h2>Error</h2>}
    ]
)

export default router;