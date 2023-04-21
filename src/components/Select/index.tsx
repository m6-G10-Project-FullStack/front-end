import React from "react";

interface iSelectProps {
  arrayValue: string[];
  label: string;
  setSelect?: any;
}

const Select = ({ arrayValue, label, setSelect, ...rest }: iSelectProps) => {
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
        onChange={(e) => setSelect(e.target.value)}
      >
        <option key={label}>Selecione</option>
        {arrayValue.length > 0 &&
          arrayValue.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
