import React, { useState } from "react";
import {
  AutoFillButton,
  AutoFillContainer,
  AvatarCircle,
  CommentButton,
  CommentButtonDiv,
  CommentInputWrapper,
  InputContainer,
  InputField,
} from "./style";

interface Props {
  user: {
    initials: string;
    name: string;
  };
}

const CommentInput: React.FC<Props> = ({ user }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <CommentInputWrapper>
      <InputContainer>
        <AvatarCircle>{user.initials}</AvatarCircle>
        <InputField
          type="text"
          placeholder={`O que você achou, ${user.name}?`}
          value={comment}
          onChange={handleCommentChange}
        />
        <CommentButtonDiv>
          <CommentButton onClick={handleCommentSubmit}>Comentar</CommentButton>
        </CommentButtonDiv>
      </InputContainer>
      <AutoFillContainer>
        <AutoFillButton onClick={() => handleAutoFillClick("Gostei muito!")}>
          Gostei muito!
        </AutoFillButton>
        <AutoFillButton onClick={() => handleAutoFillClick("Incrível!")}>
          Incrível!
        </AutoFillButton>
        <AutoFillButton
          onClick={() => handleAutoFillClick("Recomendarei para meus amigos!")}
        >
          Recomendarei para meus amigos!
        </AutoFillButton>
      </AutoFillContainer>
    </CommentInputWrapper>
  );
};

export default CommentInput;
