import React, { ReactNode } from "react";

interface MainContainerTypes {
  children: ReactNode;
  className?: string;
  style?: Object;
  wraperClassName?: string;
  wraperStyle?: Object;
}

const MainContainer = ({
  children,
  className,
  style,
  wraperClassName,
  wraperStyle,
}: MainContainerTypes) => {
  return (
    <div className={`w-full ${wraperClassName}`} style={wraperStyle}>
      <div
        className={`mx-auto w-full md:w-11/12  lg:w-10/12 xl:w-10/12 max-w-[1440px] px-4 md:px-0 ${className}`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
