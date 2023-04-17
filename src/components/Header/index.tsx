// import React, { useState } from "react";
// import {
//   HeaderButton,
//   HeaderButtonPrimary,
//   HeaderContainer,
//   HeaderLeft,
//   HeaderRight,
//   HeaderTitle,
//   HeaderTitleAccent,
//   HeaderUser,
//   HeaderUserIcon,
//   HeaderUserName,
//   DropdownMenu,
//   DropdownMenuItem,
// } from "./style";
// import { Button } from "../Button";

// export interface iUserProps {
//   initials: string;
//   name: string;
// }

// export interface iHeaderProps {
//   isLoggedIn: boolean;
//   user: iUserProps;
// }

// export const Header = ({ isLoggedIn, user }: iHeaderProps) => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <HeaderContainer>
//       <HeaderLeft>
//         <HeaderTitle>
//           Motors <HeaderTitleAccent>Shop</HeaderTitleAccent>
//         </HeaderTitle>
//       </HeaderLeft>
//       <HeaderRight>
//         {isLoggedIn ? (
//           <HeaderUser onClick={toggleDropdown}>
//             <HeaderUserIcon>{user.initials}</HeaderUserIcon>
//             <HeaderUserName>{user.name}</HeaderUserName>
//             {showDropdown && (
//               <DropdownMenu>
//                 <DropdownMenuItem>Editar Perfil</DropdownMenuItem>
//                 <DropdownMenuItem>Editar endereço</DropdownMenuItem>
//                 <DropdownMenuItem>Meus Anúncios</DropdownMenuItem>
//                 <DropdownMenuItem>Sair</DropdownMenuItem>
//               </DropdownMenu>
//             )}
//           </HeaderUser>
//         ) : (
//           <>
//             <Button
//               size="small"
//               variant="gray-4"
//               clickFunction={() => console.log("logou")}
//             >
//               Fazer Login
//             </Button>
//             <Button
//               size="small"
//               variant="gray-border"
//               clickFunction={() => console.log("cadastrou")}
//             >
//               Cadastrar
//             </Button>
//           </>
//         )}
//       </HeaderRight>
//     </HeaderContainer>
//   );
// };
