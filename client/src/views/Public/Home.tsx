import MainLayout from '../../Layouts/MainLayout'
import Container from '../../Layouts/Container'
import { useForm } from 'antd/es/form/Form'
import FutsalCard from '../../components/FutsalCard/FutsalCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import OurOfferings from '../../components/OurOfferings/OurOfferings'
import StatBar from '../../components/StatBar/StatBar'
import MainContainer from '../../user-side/Maincontainer/Maincontainer'
import Slider from "react-slick";
import FutsalSlider from '../../components/FutsalSlider/FutsalSlider'

const Home = () => {
  const [form] = useForm()
  return (
    <MainLayout bannerData={{title:'fIND YOUR gROUND', description:'Get Instant Information every futsal availabe and suit toyour schedule and available', button:{label:"Start Exploring", path:'/futsals'}}}>
        <Container>
          <SectionTitle centered title={"About Us"} subTitle="We aspire to help people findplaces to play in and people to play with." description="Searching venues for your matches, finding players for your event
 or dropping in for a match after work"  />
        </Container>
        <OurOfferings />
        <StatBar />
        <FutsalSlider />
    </MainLayout>
  )
}

export default Home