import { useState } from "react";
import { Button } from "../Button";

interface iInputProps {
  label: string;
  placeholder: string;
  register: Function;
  name: string;
  valor?: number | null;
  type?: string;
}

const Input = ({
  label,
  placeholder,
  register,
  name,
  valor,
  ...rest
}: iInputProps) => {
  const [value, setValue] = useState<any>(valor);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        className="font-lex font-medium text-sm leading-4 text-gray1"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        {...rest}
        {...register(name)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={label}
        placeholder={placeholder}
        className="font-inter font-normal text-base text-gray3 p-2 rounded-s border-[2px] border-gray6 bg-gray10 cursor-pointer hover:border-brand2 focus:border-brand2 mb-2"
      />
    </div>
  );
};

export default Input;
