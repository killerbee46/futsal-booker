import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

export interface SectionTitleTypes {
  title?: string;
  subtitle?: string;
  alignCenter?: boolean;
  bgDark?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  alignCenter,
  bgDark,
}: SectionTitleTypes) => {
  const darkBg = bgDark ? " !bg-primary " : ""
  const darkText = bgDark ? " !text-white " : " !text-primary2 !font-medium"
  const textAlign = alignCenter ? " !justify-center " : ""
  return (
    <div className={textAlign + darkBg+ 'flex flex-col justify-center items-center my-2 sm:my-5 md:my-8 lg:my-10 py-2 sm:py-5 md:py-8 lg:py-10 px-5'}>
      <Title level={2} className={"!font-extrabold uppercase !m-0" + darkText}>
        {title}
      </Title>
      {
        subtitle &&
        <Paragraph className={`pt-5 ${bgDark ? "text-text_seconday" : "text-text/65"}`}>
        {subtitle}
      </Paragraph>
      }
    </div>
  );
};

export default SectionTitle;
