import MainLayout from '../../Layouts/MainLayout'
import Container from '../../Layouts/Container'
import { useForm } from 'antd/es/form/Form'
import { Col, Image, Row } from 'antd'
import FutsalCard from '../../components/FutsalCard/FutsalCard'

const Home = () => {
  const [form] = useForm()
  return (
    <MainLayout bannerData={{title:'fIND YOUR gROUND', description:'Get Instant Information every futsal availabe and suit toyour schedule and available'}}>
        <Container>
          Home Page
        </Container>
    </MainLayout>
  )
}

export default Home