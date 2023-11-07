
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

const Body =()=>{
        const appRouter = createBrowserRouter([
            {
                path:"/",
                element:<Login/>,
            },
            {
                path:"/header",
                element:<Header/>,
            },

        ])

    return(
        <RouterProvider router={appRouter}/>
    );
};
export default Body;