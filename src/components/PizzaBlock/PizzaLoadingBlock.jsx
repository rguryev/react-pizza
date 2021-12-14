import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="137" cy="112" r="110" />
      <rect x="4" y="244" rx="5" ry="5" width="273" height="22" />
      <rect x="6" y="294" rx="9" ry="9" width="270" height="86" />
      <rect x="8" y="407" rx="8" ry="8" width="92" height="31" />
      <rect x="158" y="401" rx="16" ry="16" width="115" height="47" />
    </ContentLoader>
  )
};

export default PizzaLoadingBlock;
