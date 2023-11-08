import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";

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
    {
        path:"/browse",
        element:<Browse/>,
    },

   ])    
   
    return(
        <RouterProvider router={appRouter}/>  
    );
};
export default Body;