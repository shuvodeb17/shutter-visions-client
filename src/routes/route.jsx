import {
    createBrowserRouter,
} from "react-router-dom";
import PopularClasses from "../components/PopularClasses/PopularClasses";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddCourses from "../pages/Dashboard/AddCourses/AddCourses";
import AllClasses from "../pages/Dashboard/AllClasses/AllClasses";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Classes from "../pages/Dashboard/Classes/Classes";
import Feedback from "../pages/Dashboard/Feedback/Feedback";
import ManageCourses from "../pages/Dashboard/ManageCourses/ManageCourses";
import MyCourses from "../pages/Dashboard/MyCourses/MyCourses";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentsHistory from "../pages/Dashboard/PaymentsHistory/PaymentsHistory";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";


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
                path: 'instructors',
                element: <Instructors />
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
            },
            {
                path: '/dashboard/add-courses',
                element: <AddCourses />
            },
            {
                path: '/dashboard/payment',
                element: <PrivateRoute><Payment /></PrivateRoute>
            },
            {
                path: '/dashboard/payment-history',
                element: <PaymentsHistory />
            },
            {
                path: '/dashboard/classes',
                element: <Classes />
            },
            {
                path: '/dashboard/my-select-class',
                element: <SelectedClass />
            },
            {
                path: '/dashboard/manage-courses',
                element: <ManageCourses />
            },
            {
                path: '/dashboard/my-courses',
                element: <MyCourses />
            },
            {
                path: '/dashboard/all-classes',
                element: <AllClasses />
            },
            {
                path: '/dashboard/feedback',
                element: <Feedback />
            },
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;