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

const Header = ({ isLoggedIn, user }) => {
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
            <HeaderButton>Fazer login</HeaderButton>
            <HeaderButtonPrimary>Cadastrar</HeaderButtonPrimary>
          </>
        )}
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
