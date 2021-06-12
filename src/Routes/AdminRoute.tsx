import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";

export default function AdminRoute(props:any) {
    return (
        <BrowserRouter>
        <Route path='/admin' exact component={DashboardRoute}  />
        </BrowserRouter>

    );
}