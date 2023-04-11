import React from "react";
import {
  HeaderButton,
  HeaderButtonPrimary,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderTitle,
  HeaderTitleAccent,
  HeaderUser,
  HeaderUserIcon,
  HeaderUserName,
} from "./style";

//mudar o local das inferfaces depois

export interface iUserProps {
  initials: string;
  name: string;
}

export interface iHeaderProps {
  isLoggedIn: boolean;
  user: iUserProps;
}

const Header = ({ isLoggedIn, user }: iHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderTitle>
          Motors <HeaderTitleAccent>Shop</HeaderTitleAccent>
        </HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        {isLoggedIn ? (
          <HeaderUser>
            <HeaderUserIcon>{user.initials}</HeaderUserIcon>
            <HeaderUserName>{user.name}</HeaderUserName>
          </HeaderUser>
        ) : (
          <>
            <HeaderButton>Fazer Login</HeaderButton>
            <HeaderButtonPrimary>Cadastrar</HeaderButtonPrimary>
          </>
        )}
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
