import Image from "next/image";
import React from "react";
import textStyle from "../../../styles/text.module.css";
import boxStyle from "./box.module.css";

type BoxProps = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
};
export const Box = ({ title, description, image, bgColor }: BoxProps) => {
  return (
    <div className={boxStyle.main + " " + bgColor}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <Image src={image} alt={image} width={60} height={60} />
        </div>
      </div>
    </div>
  );
};
