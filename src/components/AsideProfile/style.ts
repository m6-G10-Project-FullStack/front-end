import styled from "styled-components";


export const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;

export const AvatarCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #007aff;
  color: white;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #007aff;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
