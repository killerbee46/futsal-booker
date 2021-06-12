import React from "react";
import { Route, RouteChildrenProps, Switch } from "react-router";
import Location from "../Components/Location/Location";
import ProtectedRoute from "../Routes/ProtectedRoute";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import AboutUs from "../Views/Frontend/AboutUs";
import BookingPage from "../Views/Frontend/BookingPage";
import Home from "../Views/Frontend/Home";
const SuperContainer = (props: RouteChildrenProps) => {
  return (
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/about' component={AboutUs}/>
      <Route path='/contact' component={Location}/>
      <Route path='/booking' component={BookingPage}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      {/* <Route path="/admin" component={AdminHome}/> */}
      </Switch>
  );
};

export default SuperContainer;
