import {
    createBrowserRouter,
} from "react-router-dom";
import PopularClasses from "../components/PopularClasses/PopularClasses";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'popular-class',
                element: <PopularClasses />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Registration />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/all-users',
                element: <AllUsers />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;