import { Route, Switch } from "react-router";
import AuthContainer from "../Container/AuthContainer";
import SuperContainer from "../Container/SuperContainer";
import Admin from "../Views/Admin/Admin";
import AdminProfile from "../Views/Admin/AdminProfile";
import BookingControl from "../Views/Admin/BookingControl";
import BookingList from "../Views/Admin/BookingList";
import UserList from "../Views/Admin/UserList";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import AboutUs from "../Views/Frontend/AboutUs";
import BookingPage from "../Views/Frontend/BookingPage";
import Home from "../Views/Frontend/Home";
import OurLocation from "../Views/Frontend/OurLocation";

export default function MainRoute() {
    return (
        <Switch>
            <Route path='/user-profile' component={AdminProfile}/>
            <Route path="/booking-control" component={BookingControl}/>
            <Route path="/bookings" component={BookingList}/>
            <Route path="/users" component={UserList}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/booking" component={BookingPage} />
            <Route path="/contact" component={OurLocation} />
            <Route path="/about" component={AboutUs} />
            <Route path="/" component={Home} />
        </Switch>

    );
}