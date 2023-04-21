import React, { forwardRef } from "react";
import { Button } from "../Button";

interface iInputProps {
  label: string;
  placeholder: string;
  type?: string;
}

const Input = (
  { label, placeholder, type, ...rest }: iInputProps,
  ref: any
) => {
  return (
    <div className="flex flex-col w-full">
      <label
        className="font-lex font-medium text-sm leading-4 text-gray1"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        {...rest}
        id={label}
        ref={ref}
        type={type || "text"}
        placeholder={placeholder}
        className="font-inter font-normal text-base text-gray3 pl-1 mt-8 mb-6"
      />
    </div>
  );
};

export default forwardRef(Input);
