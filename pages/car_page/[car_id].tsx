// import React from "react";
// import Image from "next/dist/client/image";
// import car from "../../src/assets/car.png";
// import { Button } from "../../src/components/Button";
// import { CommentCard } from "../../src/components/CommentCard";
// import CommentInput from "../../src/components/CommentInput";
// import { MainStyled } from "./style";
// import { AsidePhotos } from "../../src/components/AsidePhotos";
// import { photos } from "./dataFotos";
// import AsideProfile from "../../src/components/AsideProfile";
// import { Header } from "../../src/components/Header";
// const CardPage = () => {
//   const user = {
//     name: "Roberto",
//     initials: "RS",
//     description: "Vendedor especialido em carros de luxo.",
//   };

//   return (
//     <>
//       <Header isLoggedIn={true} user={user} />
//       <MainStyled>
//         <section className="section-global">
//           <section className="section-car">
//             <Image className="img-car" src={car} alt="Card" />
//           </section>
//           <section className="section-details-car">
//             <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h1>
//             <div className="div-price">
//               <div>
//                 <span>2013</span>
//                 <span>0 KM</span>
//               </div>
//               <p>R$ 00.000,00</p>
//             </div>
//             <Button
//               variant="brand-1"
//               size="small"
//               clickFunction={() => console.log("comprou")}
//             >
//               Comprar
//             </Button>
//           </section>
//           <section className="section-description">
//             <h2>Descrição</h2>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industrys standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </section>
//           <div className="section-comment">
//             <CommentCard
//               cor="blue"
//               datetime="11/04/2023"
//               name="Roberto"
//               initial="RS"
//               key="1"
//               text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//             />
//           </div>
//           <section className="section-inputComment">
//             <div>
//               <span>SL</span>
//               <span>Samuel Leão</span>
//             </div>
//             <CommentInput user={user} />
//           </section>
//         </section>
//         <aside>
//           <div className="div-aside">
//             <AsidePhotos photos={photos} />
//           </div>
//           <div>
//             <AsideProfile user={user} />
//           </div>
//         </aside>
//       </MainStyled>
//     </>
//   );
// };

// export default CardPage;
