import { Route, RouteChildrenProps, Switch } from "react-router";
import Admin from "../Views/Admin/Admin";
export const DashboardRoute = (props: RouteChildrenProps) => {
  return (
    <Switch>
      <Route path='/admin' exact component={Admin} />
      <Route component={Admin} />
    </Switch>
  );
};

export default DashboardRoute;
