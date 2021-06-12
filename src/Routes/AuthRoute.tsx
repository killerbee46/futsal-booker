import { Redirect, Route, RouteChildrenProps, Switch } from "react-router";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
export const AuthRoute = (props: RouteChildrenProps) => {
  return (
    <Switch>
      <Route path='/register' exact component={Register} />
      <Route path='/login' exact component={Login} />
      <Redirect to='/login' />
    </Switch>
  );
};

export default AuthRoute;
