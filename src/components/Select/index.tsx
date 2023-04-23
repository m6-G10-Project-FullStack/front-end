import React from "react";

interface iSelectProps {
  arrayValue?: string[];
  label: string;
  setSelect?: any;
  register: Function;
  name: string;
}

const Select = ({
  arrayValue,
  label,
  setSelect,
  register,
  name,
  ...rest
}: iSelectProps) => {
  return (
    <>
      <label
        className="font-lex font-medium text-sm leading-4 text-gray1 sm:font-inter sm:text-r"
        htmlFor={label}
      >
        {label}
      </label>
      <select
        className="font-inter font-normal text-base text-gray3 pl-1 mt-8 mb-6"
        id={label}
        {...rest}
        {...register(name)}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option key={label}>Selecione</option>
        {arrayValue!.length > 0 &&
          arrayValue!.map((item, index) => (
            <option
              key={index}
              value={
                item == "1"
                  ? "Flex"
                  : item == "2"
                  ? "Híbrido"
                  : item == "3"
                  ? "Elétrico"
                  : item
              }
            >
              {item == "1"
                ? "Flex"
                : item == "2"
                ? "Híbrido"
                : item == "3"
                ? "Elétrico"
                : item}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
