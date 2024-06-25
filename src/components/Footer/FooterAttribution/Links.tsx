import React from "react";
import { LinksProps } from "../Footer.types";

const Links: React.FC<LinksProps> = ({ img }) => (
  <div className="social__img-div flex-elem">
    <img className="social__img" src={img} alt="" />
  </div>
);

export default Links;
