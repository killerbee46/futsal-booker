import AdminLayout from "../../Layouts/AdminLayout/AdminLayout";
import AdminBooking from "../../Components/Booking/AdminBooking/AdminBooking";

export default function BookingControl(){
    return(
        <AdminLayout style={{padding:0,width:'100%'}}>
            <AdminBooking/>
        </AdminLayout>
            
       
    );
}