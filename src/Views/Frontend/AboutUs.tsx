import About from "../../Components/About/About";
import Cards from "../../Components/Card/Card";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

export default function AboutUs(){
    return(
        <MainLayout>
            <Cards>
            <About/>
            </Cards>
            
        </MainLayout>
    );
}