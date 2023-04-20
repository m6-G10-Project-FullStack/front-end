import React, { useState } from "react";
import { Button } from "../Button";

interface iComentInputProps {
  initials: string;
  name: string;
  cor: string;
  /*  | "random1"
    | "random2"
    | "random3"
    | "random4"
    | "random5"
    | "random6"
    | "random7"
    | "random8"
    | "random9"
    | "random10"
    | "random11"
    | "random12"; */
}

const corMap = {
  random1: "bg-random1",
  random2: "bg-random2",
  random3: "bg-random3",
  random4: "bg-random4",
  random5: "bg-random5",
  random6: "bg-random6",
  random7: "bg-random7",
  random8: "bg-random8",
  random9: "bg-random9",
  random10: "bg-random10",
  random11: "bg-random11",
  random12: "bg-random12",
};

const CommentInput = ({ initials, name, cor }: iComentInputProps) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    console.log("Comment submitted:", comment);
    setComment("");
  };

  const handleAutoFillClick = (text: string) => {
    setComment(text);
  };

  return (
    <div className="flex flex-col w-full max-w-[351px] py-9 px-6 md:max-w-[751px] md:h-[289px]">
      <div className="flex flex-col mt-[10px]">
        <div className="flex items-center p-[3px]">
          <div
            className={`flex justify-center items-center w-8 h-8 rounded-full text-gray10 font-medium text-sm ${corMap[cor]}`}
          >
            {initials}
          </div>
          <h3 className="ml-2 font-medium text-sm leading-6 text-gray2">
            {name}
          </h3>
        </div>
        <textarea
          className="flex-grow mt-7 pl-3 pr-4 w-full max-w-[284px] md:max-w-[672px] md:h-16 h-32"
          placeholder={`O que você achou, ${name}?`}
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="flex justify-start mt-6 md:justify-end">
          <Button variant="brand-2" onClick={handleCommentSubmit}>
            Comentar
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap mt-[10px]">
        <button
          className="h-[30px] rounded-[15px] bg-gray7 text-gray3 py-0 px-[10px] mb-[10px] mr-[10px] font-bold text-sm cursor-pointer hover:bg-gray10"
          onClick={() => handleAutoFillClick("Gostei muito!")}
        >
          Gostei muito!
        </button>
        <button
          className="h-[30px] rounded-[15px] bg-gray7 text-gray3 py-0 px-[10px] mb-[10px] mr-[10px] font-bold text-sm cursor-pointer hover:bg-gray10"
          onClick={() => handleAutoFillClick("Incrível!")}
        >
          Incrível!
        </button>
        <button
          className="h-[30px] rounded-[15px] bg-gray7 text-gray3 py-0 px-[10px] mb-[10px] mr-[10px] font-bold text-sm cursor-pointer hover:bg-gray10"
          onClick={() => handleAutoFillClick("Recomendarei para meus amigos!")}
        >
          Recomendarei para meus amigos!
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
