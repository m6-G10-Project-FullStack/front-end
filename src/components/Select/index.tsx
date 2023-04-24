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
    <div className="w-full flex flex-col gap-2">
      <label
        className="font-lex font-medium text-sm leading-4 text-gray1 sm:font-inter sm:text-r"
        htmlFor={label}
      >
        {label}
      </label>
      <select
        className="font-inter font-normal text-base text-gray3 p-3 rounded-s border-[2px] border-gray6 bg-gray10 cursor-pointer hover:border-brand2 focus:border-brand2 mb-2"
        id={label}
        {...rest}
        {...register(name)}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option
          className="font-inter font-normal text-base text-gray1"
          key={label}
        >
          Selecione
        </option>
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
    </div>
  );
};

export default Select;
