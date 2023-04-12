import styled from "styled-components";

export const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const AvatarCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007aff;
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;

export const InputField = styled.input`
  flex-grow: 1;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #007aff;
  padding: 0 20px;
  font-size: 16px;
`;

export const CommentButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CommentButton = styled.button`
  height: 40px;
  width: fit-content;
  border-radius: 5px;
  margin-top: 5px;
  background-color: #007aff;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 0 20px;
  margin-left: 10px;
  cursor: pointer;
  right: 0;
`;

export const AutoFillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const AutoFillButton = styled.button`
  height: 30px;
  border-radius: 15px;
  background-color: #f2f2f2;
  color: #333;
  font-weight: bold;
  font-size: 14px;
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
