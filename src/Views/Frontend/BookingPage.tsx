import Booking from "../../Components/Booking/Booking";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

export default function BookingPage(){
    return(
        <MainLayout>
            <div style={{padding:'12px'}}>
            <Booking/>
            </div>

        </MainLayout>
    );
}