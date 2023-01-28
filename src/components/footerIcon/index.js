import React from "react";

const FooterIcon = ({ customClass, linking, iconName }) => {
  return (
    <div
      className={`${customClass} bg-primary border-primary border-[1px] rounded-full p-0.5 smL:p-[2.5px] linear duration-300 hover:bg-transparent hover:border-white`}
    >
      <a href={linking}>{iconName}</a>
    </div>
  );
};

export default FooterIcon;
