import React from "react";
import { Button } from "../Button";

interface iInputProps {
  label: string;
  placeholder: string;
  register: Function;
  name: string;
  valor?: number;
}

const Input = ({
  label,
  placeholder,
  register,
  name,
  valor,
  ...rest
}: iInputProps) => {
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
        {...register(name)}
        value={valor}
        id={label}
        type="text"
        placeholder={placeholder}
        className="font-inter font-normal text-base text-gray3 pl-1 mt-8 mb-6 w-full"
      />
    </div>
  );
};

export default Input;
