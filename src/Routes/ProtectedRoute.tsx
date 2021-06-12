import React from "react";
import { Route, RouteChildrenProps, Switch } from "react-router";
import Admin from "../Views/Admin/Admin";
import DashboardRoute from "./DashboardRoute";
export const ProtectedRoute = (props: RouteChildrenProps) => {
  return (
    <Switch>
      {/* <Route
        path={`${props.match?.path}admin`}
        component={Admin}
      />
      <Route
        path={`${props.match?.path}admin`}
        component={Admin}
      />
      <Route component={DashboardRoute} /> */}
    </Switch>
  );
};

export default ProtectedRoute;
