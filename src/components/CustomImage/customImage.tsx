import React from "react";
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  domains?: string[];
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, ...props }) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default CustomImage;
