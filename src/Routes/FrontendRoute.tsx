import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import OurLocation from "../Views/Frontend/OurLocation";
import AboutUs from "../Views/Frontend/AboutUs";
import BookingPage from "../Views/Frontend/BookingPage";
import Home from "../Views/Frontend/Home";

export default function FrontendRoute() {
    return (
        <BrowserRouter>
            <Route path='/contact' component={OurLocation} />
            <Route path='/about' component={AboutUs} />
            <Route path='/booking' component={BookingPage} />
            <Route path='/' exact component={Home} />
        </BrowserRouter>

    );
}