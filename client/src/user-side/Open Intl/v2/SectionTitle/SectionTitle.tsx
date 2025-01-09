import { Button, Flex } from "antd";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
import React from "react";

export interface SectionTitleTypes {
  title?: string;
  subtitle?: string;
  alignCenter?: boolean;
  bgDark?: boolean;
  buttonLabel?:string;
  buttonPath?:string;
}

const SectionTitle = ({
  title,
  subtitle, 
  buttonLabel,
  buttonPath
}: SectionTitleTypes) => {
  return (
    <div>
      {
        (title || subtitle) ? 
        <div className={'py-3 my-10'}>
      <Flex justify="space-between" align="center">
      <div>
      <div className="w-[35px] sm:w-[50px] md:w-[60px] lg:w-[80px] border-t-[4px] sm:border-t-[5px] md:border-t-[6px] mb-2 sm:mb-2 md:mb-3 lg:mb-4 border-primary">
      </div>
      <Title level={3} className={"!font-bold uppercase !m-0"}>
        {title}
      </Title>
      <Title level={5} className="!font-semibold capitalize !-my-2 ps-2" style={{paddingTop:10}}>
        {subtitle}
      </Title>
      </div>
      {
        buttonLabel && buttonLabel !== "" &&
        <Link href={buttonPath}>
          <Button className="h-auto capitalize bg-primary text-white border-2 !border-primary hover:bg-white hover:!text-primary py-3 px-5 font-semibold">
          {buttonLabel}
          </Button>
        </Link>
      }
      </Flex>
    </div> :
    <div className="m-10" /> 
      }
    </div>
  );
};

export default SectionTitle;
