import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Auth/Login";
import Browse from "../../Components/Browse/Browse";

const Body = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        }
    ])

    return(
        <div>
            <RouterProvider router={routes}/>
        </div>
    )
}

export default Body;