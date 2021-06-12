import AdminLayout from "../../Layouts/AdminLayout/AdminLayout";
import Profile from "../../Components/UserProfile/Profile";

export default function AdminProfile(){
    return(
        <AdminLayout style={{padding:0}}>
            <Profile />
        </AdminLayout>
    )
}