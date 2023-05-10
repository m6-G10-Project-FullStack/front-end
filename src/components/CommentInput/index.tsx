import React, { useState } from "react";
import { Button } from "../Button";
import { useAuth } from "../../contexts/authContext";
import api from "../../services/api";

const CommentInput = () => {
  const [comment, setComment] = useState("");
  const { user, router, token, isLogged } = useAuth();

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    const { car_id } = router.query;
    console.log(car_id);
    const newComment = {
      comment: comment,
      carId: car_id,
      userId: user.id,
    };
    await api
      .post("/comments", newComment, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => router.reload())
      .catch((err) => console.log(err))
      .finally(() => setComment(""));
  };

  const handleAutoFillClick = (text: string) => {
    setComment(text);
  };

  return (
    <div className="flex flex-col w-full max-w-[351px] py-9 md:max-w-[751px] md:h-[289px]">
      <div className="flex flex-col mt-[10px]">
        <div className="flex items-center p-[3px]">
          <div
            className={`flex justify-center items-center w-8 h-8 rounded-full text-gray10 font-inter font-semibold text-sm bg-${user.color}`}
          >
            <p className="text-whitefixed">
              {user.name?.toUpperCase().split("")[0]}
              {user.name?.toUpperCase().split("")[1]}
            </p>
          </div>
          <h3 className="ml-2 font-medium text-sm leading-6 text-gray2">
            {user.name}
          </h3>
        </div>
        <textarea
          className="flex-grow mt-7 pl-3 pr-4 w-full max-w-[284px] md:max-w-[672px] md:h-16 h-3 resize-none"
          placeholder={`O que você achou, ${user.name}?`}
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="flex justify-start mt-6 md:justify-end">
          <Button
            type="button"
            disabled={!isLogged}
            variant={isLogged ? "brand-1" : "disabled"}
            onClick={handleCommentSubmit}
          >
            Comentar
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap mt-[10px]">
        <button
          type="button"
          className="h-[30px] rounded-[15px] bg-gray7 text-gray3 py-0 px-[10px] mb-[10px] mr-[10px] font-bold text-sm cursor-pointer hover:bg-gray10"
          onClick={() => handleAutoFillClick("Gostei muito!")}
        >
          Gostei muito!
        </button>
        <button
          type="button"
          className="h-[30px] rounded-[15px] bg-gray7 text-gray3 py-0 px-[10px] mb-[10px] mr-[10px] font-bold text-sm cursor-pointer hover:bg-gray10"
          onClick={() => handleAutoFillClick("Incrível!")}
        >
          Incrível!
        </button>
        <button
          type="button"
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
