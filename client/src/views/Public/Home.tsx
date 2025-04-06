import MainLayout from '../../Layouts/MainLayout'
import Container from '../../Layouts/Container'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import OurOfferings from '../../components/OurOfferings/OurOfferings'
import StatBar from '../../components/StatBar/StatBar'
import FutsalSlider from '../../components/FutsalSlider/FutsalSlider'
import { getPopularFutsals } from '../../api/FutsalApi'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
  const {data, refetch} = useQuery({queryKey:['popular-futsals'],queryFn:getPopularFutsals})
  const popular_futsals = data?.data?.futsals
  return (
    <MainLayout bannerData={{title:'fIND YOUR gROUND', description:'Get Instant Information every futsal availabe and suit to your schedule and available', button:{label:"Start Exploring", path:'/futsals'}}}>
        <Container>
          <SectionTitle centered title={"About Us"} subTitle="We aspire to help people find places to play in and people to play with." description="Searching venues for your matches, finding players for your event
 or dropping in for a match after work"  />
        </Container>
        <OurOfferings />
        <StatBar />
        <FutsalSlider data={popular_futsals} />
    </MainLayout>
  )
}

export default Home