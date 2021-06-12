import Banner from "../../Components/Banner/Banner";
import FutsalInfo from "../../Components/FutsalInfo/FutsalInfo";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

export default function Home(){
    return(
        <MainLayout>
            <Banner/>
            <FutsalInfo/>
        </MainLayout>
    );
}