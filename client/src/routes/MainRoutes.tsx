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
import { localUser } from "../api/AuthApi";
import FutsalList from "../views/DashBoard/Admin/Futsal/FutsalList"
import DashBoardPage from "../views/DashBoard/DashBoardPage";
import AddFutsal from "../views/DashBoard/Admin/Futsal/AddFutsal";
import FutsalDetail from "../views/DashBoard/Admin/Futsal/FutsalDetail";
import EditFutsal from "../views/DashBoard/Admin/Futsal/EditFutsal";
import UserList from "../views/DashBoard/Admin/Users/UserList";
import AddUser from "../views/DashBoard/Admin/Users/AddUser";
import UserDetail from "../views/DashBoard/Admin/Users/UserDetail";
import EditUser from "../views/DashBoard/Admin/Users/EditUser";
import Error from "../views/Public/Error";
import FutsalDetailPage from "../views/Public/FutsalDetailPage";
import BookingPage from "../views/Public/BookingPage";
import BookingList from "../views/DashBoard/Admin/Bookings/BookingList";
import MyBookingsPage from "../views/Public/MyBookingsPage";
import FutsalOwnerControlPage from "../views/DashBoard/FutsalOwner/FutsalOwnerControlPage";
import FutsalOwnerBookingControlPage from "../views/DashBoard/FutsalOwner/FutsalOwnerBookingControlPage";

const user = localUser()

const dashboardRoutes = () => {
  if (user?.role === 1) {
    return []
  } else if (user?.role === 2) {
return[
  {
    path: "dashboard",
    element: <DashBoardPage />
  },
  {
    path: "dashboard/futsals",
    element: <Outlet />,
        children:[
          {
            path: "",
            element: <FutsalOwnerControlPage />
          },
          {
            path: "add",
            element: <AddFutsal owner  />
          },
          {
            path: ":id",
            element: <Outlet />,
            children:[
              {
                path: "",
                element: <FutsalDetail />
              },
              {
                path: "edit",
                element: <EditFutsal />
              },
            ]
          },
        ]
  },
  {
    path: "dashboard/my-futsal-bookings",
    element: <FutsalOwnerBookingControlPage />
  },
]
  } else if (user?.role === 3) {
    return [ 
  {
    path: "dashboard",
    element: <DashBoardPage />
  },
      {
        path: "dashboard/futsals",
        element: <Outlet />,
        children:[
          {
            path: "",
            element: <FutsalList />
          },
          {
            path: "add",
            element: <AddFutsal />
          },
          {
            path: ":id",
            element: <Outlet />,
            children:[
              {
                path: "",
                element: <FutsalDetail />
              },
              {
                path: "edit",
                element: <EditFutsal />
              },
            ]
          },
        ]
      },
      {
        path: "dashboard/users",
        element: <Outlet />,
        children:[
          {
            path: "",
            element: <UserList />
          },
          {
            path: "add",
            element: <AddUser />
          },
          {
            path: ":id",
            element: <Outlet />,
            children:[
              {
                path: "",
                element: <UserDetail />
              },
              {
                path: "edit",
                element: <EditUser />
              },
            ]
          },
        ]
      },
      {
        path: "dashboard/bookings",
        element: <Outlet />,
        children:[
          {
            path: "",
            element: <BookingList />
          },
        ]
      },
    ]
  } else {
[]
  }
} 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bookings",
    element: <MyBookingsPage />,
  },
  {
    path: "futsals",
    element: <Outlet />,
    children:[
      {
        path: "",
        element: <Futsals />,
      },
      {
        path: ":id",
        element: <Outlet />,
        children:[
          {
            path: "",
            element: <FutsalDetailPage />,
          },
          {
            path: "book",
            element: <BookingPage />,
          }
        ]
      },
    ]
  },
  {
    path: "auth",
    element: <AuthRedirect />,
    children: [
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
  {
    path:"*",
    element:<Error />
  }
].concat(dashboardRoutes()||[]));

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