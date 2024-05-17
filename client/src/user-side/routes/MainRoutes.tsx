import * as React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "../views/Auth/Register";
import Login from "../views/Auth/Login";
import AuthRedirect from "./AuthRedirect";
import Futsals from "../views/Public/Futsals";
import Home from "../views/Public/Home";
import { getUser } from "../../api/AuthApi";
import UserDashboard from "../views/DashBoard/User/UserDashboard";
import DashboardLayout from "../Layouts/DashboardLayout";

const user = getUser()

const dashboardRoutes = () => {
  if (user?.role === 0) {
    return {
      path:"dashboard",
      element:<UserDashboard />
    }
  } else if (user?.role === 1) {
    
  } else if (user?.role === 3) {
    return {
      path:"dashboard",
      element:<DashboardLayout/>
    }
  } else {
    
  }
} 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/futsals",
    element: <Futsals />,
  },
  {
    path: "auth",
    element: <AuthRedirect />,
    children:[
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
  {...dashboardRoutes()}
]);

const MainRoutes = () => {
    return (
        <RouterProvider router={router} />
      );
}

export default MainRoutes














// import React from 'react'
// import { Route, Routes } from 'react-router'
// import SideBar from '../../components/admin/Sidebar/SideBar'
// import Dashboard from '../../components/admin/dashboard/dashboard'
// import CreateMatchData from '../../components/admin/manageMatch/createMatchData'
// import ManageMatchData from '../../components/admin/manageMatch/manageMatchData'
// import ManagePayment from '../../components/admin/managePayment/managePayment'
// import CreateSlip from '../../components/admin/manageSlips/createSlip'
// import ManageSlip from '../../components/admin/manageSlips/manageSlip'
// import Teams from '../../components/admin/manageTeams/teams'
// import ManageUsers from '../../components/admin/manageUsers/manageUsers'
// import ManageUsersSlip from '../../components/admin/manageUsersSlip/manageUsersSlip'
// import MyForm from '../../components/tests/MyForm'
// import AmericanFootballPage from '../../components/user/americanFootballPage/americanFootballPage'
// import BasketballPage from '../../components/user/basketballPage/basketballPage'
// import UserBets from '../../components/user/userBets/userBets'
// import UserLogin from '../../components/user/userLogin/userLogin'
// import Home from '../views/Home'
// import History from '../../components/user/historyUser/historyUser'
// import SoccerPage from '../../components/user/soccerPage/soccerPage'

// const MainRoutes = () => {
//   return (
//         <Routes>
//           {/* User Routes */}
//           <Route path="/login" element={<UserLogin />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/myBets" element={<UserBets />} />
//           <Route path="/history" element={<History />} />
//           <Route path="/americanFootball" element={<AmericanFootballPage />} />
//           <Route path="/basketball" element={<BasketballPage />} />
//           <Route path="/soccer" element={<SoccerPage />} />

//           {/* Admin Routes */}
//           <Route path="/admin" element={<SideBar />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="manageTeams" element={<Teams />} />
//             <Route path="manageUsers" element={<ManageUsers />} />
//             <Route path="manageSlip" element={<ManageSlip />} />
//             <Route path="createSlip" element={<CreateSlip />} />
//             {/* <Route path="manageEvents" element={<ManageEvents />} /> */}
//             <Route path="manageMatchData" element={<ManageMatchData />} />
//             <Route path="createMatchData" element={<CreateMatchData />} />
//             <Route path="managePayment" element={<ManagePayment />} />
//             <Route path="ManageUsersSlip" element={<ManageUsersSlip />} />
//             <Route path="testmyform" element={<MyForm />} />
//           </Route>

//           {/* 404 Not Found */}
//           <Route path="*" element={<div>Not found</div>} />
//         </Routes>
//   )
// }

// export default MainRoutes