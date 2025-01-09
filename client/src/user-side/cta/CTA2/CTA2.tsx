import React from "react";
import { Button } from "../../button/Button";
import { CTATypes } from "../CTA.types";
import { Typography } from "antd";

export const CTA2 = ({
  title,
  description,
  button_text,
  cta_action,
}: CTATypes) => {
  return (
    <div className="bg-backgroundPrimary py-6 md:py-10">
      <div className="mx-auto w-full md:w-11/12  lg:w-10/12 xl:w-10/12 max-w-[1440px] px-4 md:px-0">
        <div className="flex flex-col items-center gap-4">
          <Typography.Paragraph className="font-bold my-2">
            {title}
          </Typography.Paragraph>
          <div className="bg-blue-600 w-5/12 h-1 md:h-[5px] my-2"></div>
          {description && <p className="my-2">{description}</p>}
          <div className="py-2">
            <Button label={button_text} onClick={() => cta_action} primary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA2;
