import React from "react";
import { Button } from "../../button/Button";
import Image from "next/image";
import { CTATypes } from "../CTA.types";

export const CTA1 = ({
  title,
  description,
  image_url,
  button_text,
  cta_action,
}: CTATypes) => {
  return (
    <div className="bg-backgroundPrimary py-6 md:py-10">
      <div className="mx-auto w-full md:w-11/12  lg:w-10/12 xl:w-10/12 max-w-[1440px] px-4 md:px-0">
        <div className="flex flex-col items-center md:flex-row gap-4">
          {/* left side */}
          <div className="w-full md:w-1/2">
            <h2 className="font-bold my-2">{title}</h2>
            <div className="bg-blue-600 w-5/12 h-1 md:h-[5px] my-2"></div>
            {description && <p className="my-2">{description}</p>}
            <div className="py-2">
              <Button label={button_text} onClick={() => cta_action} />
            </div>
          </div>

          {image_url && (
            <div className="w-full md:w-1/2 ">
              <Image
                className="rounded-lg"
                width={600}
                height={300}
                src={image_url}
                alt="cta_image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA1;
