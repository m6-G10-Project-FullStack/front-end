import React from "react";

interface iSelectProps {
  arrayValue: string[];
  label: string;
}

const Select = ({ arrayValue, label }: iSelectProps) => {
  return (
    <>
      <label
        className="font-lex font-medium text-sm leading-4 text-gray1"
        htmlFor={label}
      >
        {label}
      </label>
      <select
        className="font-inter font-normal text-base text-gray3 pl-1 mt-8 mb-6"
        id={label}
      >
        {arrayValue.map((value, index) => (
          <option key={index}>{value}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
