import { Button, Flex, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { Header_types } from "../Header_types";
import MainContainer from "../../Maincontainer/Maincontainer";
import Paragraph from "antd/es/typography/Paragraph";
import TabFilter from "../../../components/TabFilter/TabFilter";
import Container from "../../../Layouts/Container";

const defaultImage = "https://imgs.search.brave.com/mNX8gu0dTdTRoFaEui38ApO9lU7iL_YJjaDb3_id53w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzg1LzkzLzI2/LzM2MF9GXzI4NTkz/MjY3M19YcWpsdk12/QWVFZkMxM2Z4YTFH/WXBETnVGM2t0QnhY/WS5qcGc"

export const Header2 = ({ title,description, image=defaultImage, tabFilter, button }: Header_types) => {
  return (
    <>
    <MainContainer
      wraperStyle={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex className={`flex-col pt-[10%] pb-[5%] justify-end md:justify-center items-start w-full relative ${ (title || description) ? 'aspect-[7/5] md:aspect-[7/3]' :  'aspect-[7/4] md:aspect-[7/2]'}`}>
        <Title
          level={5}
          className="md:!text-3xl lg:!text-5xl !text-semibold !text-white uppercase"
        >
          {title}
        </Title>
        <Paragraph
          className="!text-bold !text-white uppercase w-full md:w-3/4 "
        >
          {description}
        </Paragraph>
        {
          button &&
          <Typography.Link href={button?.path}>
        <Button className="button success !rounded-md">{button?.label}</Button>
        </Typography.Link>
        }
      </Flex>
    </MainContainer>
      {
        tabFilter &&
        <div className="-translate-y-[50%] -mb-8">
          <Container>
          <TabFilter />
        </Container>
        </div>
      }
    </>
  );
};

export default Header2;
