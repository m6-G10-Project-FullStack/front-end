// import React, { SetStateAction, useState } from "react";
// import Select from "../Select";
// import { Button } from "../Button";
// import Input from "../Input";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { RxDragHandleDots1 } from "react-icons/rx";
// import api from "../../services/api";
// import { useAuth } from "../../contexts/authContext";
// import jwt_decode from "jwt-decode";

// export interface iModalEditAnnouncementProps {
//   setOpenModalEditAnnouncement: React.Dispatch<SetStateAction<boolean>>;
// }

// export interface iUserEditAnnouncement {
//   model?: string;
//   year?: number;
//   km?: number;
//   fuel: string;
//   color: string;
//   fipe: number;
//   price: number;
//   description: string;
//   coverImage: string;
//   id: string;
//   is_promo: boolean;
//   is_active: boolean;
//   userId: string;
//   brandId: string;
// }

// const ModalEditAnnouncement = ({
//   setOpenModalEditAnnouncement: setOpenModalEditAnnouncement,
// }: iModalEditAnnouncementProps) => {
//   const { token, router } = useAuth();
//   const decodedToken: any = jwt_decode(token!);

//   const FormSchema = yup.object().shape({
//     cep: yup.string().notRequired(),
//     city: yup.string().notRequired(),
//     state: yup.string().notRequired(),
//     street: yup.string().notRequired(),
//     number: yup.string().notRequired(),
//     complement: yup.string().notRequired(),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<iUserEditAnnouncement>({
//     resolver: yupResolver(FormSchema),
//   });

//   const onSubmitForm = async (formData: IUserRegister) => {
//     registerUser({ ...formData, is_seller: isSeller });
//   };

//   const onSubmitForm = async (data: iUserEditAnnouncement) => {
//     console.log(data);
//     const filteredData = Object.entries(data).reduce<Record<string, string>>(
//       (acc, [key, value]) => {
//         if (value !== "") {
//           acc[key] = value;
//         }

//         return acc;
//       },
//       {}
//     );
//     EditAnnouncementAPI(filteredData);
//     router.reload();
//   };

//   console.log(decodedToken);

//   const EditAnnouncementAPI = async (data: iUserEditAnnouncement) => {
//     try {
//       await api.patch(`/users/${decodedToken.sub}`, data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-gray10 w-full h-max max-h-[700px] max-w-custom344 flex flex-col content-center rounded-lg px-6 py-4 md:max-w-[520px] relative overflow-y-auto scrollbar-w-6 scrollbar-track-gray-100 scrollbar-thumb-gray-500 scrollbar-thumb-rounded-md">
//       <div className="flex w-full justify-between items-center">
//         <div></div>
//         <p className="font-lex font-medium text-base text-gray1">
//           Editar anúncio
//         </p>
//         <button
//           className="h-10 flex border-none bg-transparent text-gray3 text-custom22 cursor-pointer"
//           onClick={() => setOpenModalEditAnnouncement(false)}
//           type="button"
//         >
//           x
//         </button>

//         <div>
//                 <h5 className="font-bold mb-4">Tipo de conta</h5>
//                 <div className="flex gap-2 mb-3 justify-center">
//                   <button
//                     type="button"
//                     className={`w-[138px] py-2 px-4 rounded border-[1px] ${
//                       !isAuction
//                         ? "bg-brand1  text-gray9"
//                         : "bg-gray9  text-gray1"
//                     }`}
//                     onClick={() => {
//                       setIsAuction(false);
//                     }}
//                   >
//                     Comprador
//                   </button>
//                   <button
//                     type="button"
//                     className={`w-[138px] py-2 px-4 rounded border-[1px] ${
//                       isAuction ? "bg-brand1  text-gray9" : "bg-gray9 text-gray1"
//                     }`}
//                     onClick={() => {
//                       setIsAuction(true);
//                     }}
//                   >
//                     Anunciante
//                   </button>
//                 </div>

//       </div>

//       <div className="flex flex-col max-w-2">
//         <h1 className="text-3xl font-semibold text-gray-800 m-2">Cadastro</h1>
//         <h3 className="text-1xl font-semibold text-gray-800 m-2">
//           Informações do veículo
//         </h3>
//         <form onSubmit={handleSubmit(onSubmitForm)}>
//           <div className="flex flex-col m-2">
//             <div>
//               <Input
//                 brand={brand}
//                 label="Título"
//                 placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz"
//                 name="brand"
//               />
//               {errors.cep && (
//                 <span className="text-red-600">{errors.cep.message}</span>
//               )}
//             </div>

//             <div className="m-2">
//               <Input
//                 year={year}
//                 label="Ano"
//                 placeholder="2018"
//                 name="year"
//               />
//               {errors.state && (
//                 <span className="text-red-600">{errors.state.message}</span>
//               )}
//             </div>

//             <div className="m-2">
//               <Input
//                 register={register}
//                 label="Cidade"
//                 placeholder="Rio Branco"
//                 name="city"
//               />
//               {errors.city && (
//                 <span className="text-red-600">{errors.city.message}</span>
//               )}
//             </div>

//             <div className="m-2">
//               <Input
//                 register={register}
//                 label="street"
//                 placeholder="Avenida dos Dinossauros"
//                 name="street"
//               />
//               {errors.street && (
//                 <span className="text-red-600">{errors.street.message}</span>
//               )}
//             </div>

//             <div className="m-2">
//               <Input
//                 register={register}
//                 label="Número"
//                 placeholder="1029r"
//                 name="number"
//               />
//               {errors.number && (
//                 <span className="text-red-600">{errors.number.message}</span>
//               )}
//             </div>

//             <div className="m-2">
//               <Input
//                 register={register}
//                 label="Complemento"
//                 placeholder="Apart 12"
//                 name="complement"
//               />
//               {errors.complement && (
//                 <span className="text-red-600">
//                   {errors.complement.message}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div>
//             <Button
//               variant="gray-6"
//               onClick={() => setOpenModalEditAnnouncement(false)}
//             >
//               Cancelar
//             </Button>
//             <Button variant="alert-2">Excluir perfil</Button>
//             <Button variant="brand-1" type="submit">
//               Salvar alterações
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalEditAnnouncement;
