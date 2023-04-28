// import React, { useState } from "react";
// import Select from "../Select";
// import { Button } from "../Button";
// import Input from "../Input";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Schema } from "inspector";
// import { RxDragHandleDots1 } from "react-icons/rx";
// import api from "../../services/api";
// import { AuthContext, useAuth } from "../../contexts/authContext";
// import { iUser } from "../../@types";

// export interface iUserEdit {
//   id?: string;
//   name?: string;
//   email?: string;
//   cpf?: string;
//   phone?: string;
//   birthday?: string;
//   description?: string; 
// }


// const ModalEditAddress = ({

//   const FormSchema:<iUserEdit> = yup.object().shape({
//     name: yup.string().notRequired(),
//     email: yup.string().notRequired(),
//     cpf: yup.number().notRequired(),
//     phone: yup.string().notRequired(),
//     birthday: yup.number().notRequired(),
//     description: yup.string().notRequired(),    
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<any>({
//     resolver: yupResolver(FormSchema),
//   });



//   const onSubmitForm = async (data: any) => {
//     console.log(data);
   
//     const editedProfile = {
//       name: data.name,
//       email: data.email,
//       cpf: data.cpf,
//       phone: data.phone,
//       birthday: data.birthday,      
//       description: data.description,
      
//     };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Editar perfil</h2>
//         <form onSubmit={handleSubmit(onSubmitForm)}>
//           <div className="form-group">
//             <label htmlFor="name">Nome</label>
//             <Input
//               id="name"
//               type="text"
//               placeholder={user.name ?? "Digite seu nome"}
//               error={errors.name?.message}
//               {...register("name")}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <Input
//               id="email"
//               type="text"
//               placeholder={user.email ?? "Digite seu email"}
//               error={errors.email?.message}
//               {...register("email")}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="cpf">CPF</label>
//             <Input
//               id="cpf"
//               type="text"
//               placeholder={user.cpf?.toString() ?? "Digite seu CPF"}
//               error={errors.cpf?.message}
//               {...register("cpf")}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone">Telefone</label>
//             <Input
//               id="phone"
//               type="text"
//               placeholder={user.phone ?? "Digite seu telefone"}
//               error={errors.phone?.message}
//               {...register("phone")}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="birthday">Data de nascimento</label>
//             <Input
//               id="birthday"
//               type="text"
//               placeholder={user.birthday?.toString() ?? "Digite sua data de nascimento"}
//               error={errors.birthday?.message}
//               {...register("birthday")}
//             />
//           </div>

//           <div className="form-group">
//           <label htmlFor="description">Descrição</label>
//           <Input
//            id="description"
//            type="text"
//            placeholder={user.description ?? "Digite sua descrição"}
//            error={errors.description?.message}
//            {...register("description")}
//           />
//           </div>
    
//   }

// export default ModalEditAddress;




// <h3 className="text-1xl font-semibold text-gray-800 m-2">
//               Informações de endereço
//             </h3>
//             <div>
//               <Input
//                 register={register}
//                 label="CEP"
//                 placeholder="0000.000"
//                 name="cep"
//               />
//               {errors.cep && (
//                 <span className="text-red-600">{errors.cep.message}</span>
//               )}
//             </div>

//             <div className="flex justify-between gap-4">
//               <div className="flex flex-col w-[127px]">
//                 <Input
//                   register={register}
//                   label="Estado"
//                   placeholder="Digitar estado"
//                   name="state"
//                 />
//                 {errors.state && (
//                   <span className="text-red-600">{errors.state.message}</span>
//                 )}
//               </div>

//               <div className="flex flex-col w-[127px]">
//                 <Input
//                   register={register}
//                   label="Cidade"
//                   placeholder="Digitar cidade"
//                   name="city"
//                 />
//                 {errors.city && (
//                   <span className="text-red-600">{errors.city.message}</span>
//                 )}
//               </div>
//             </div>

//             <div className="m-2">
//               <Input
//                 register={register}
//                 label="Rua"
//                 placeholder="Digitar rua"
//                 name="street"
//               />
//               {errors.street && (
//                 <span className="text-red-600">{errors.street.message}</span>
//               )}
//             </div>

//             <div className="flex justify-around gap-2">
//               <div className="flex flex-col w-[140px]">
//                 <Input
//                   register={register}
//                   label="Número"
//                   placeholder="Digitar número"
//                   name="number"
//                 />
//                 {errors.number && (
//                   <span className="text-red-600">{errors.number.message}</span>
//                 )}
//               </div>

//               <div className="flex flex-col w-[140px]">
//                 <Input
//                   register={register}
//                   label="Complemento"
//                   placeholder="Ex: Apart 307"
//                   name="complement"
//                 />
//                 {errors.complement && (
//                   <span className="text-red-600">
//                     {errors.complement.message}
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div>
//               <h5 className="font-bold mb-4">Tipo de conta</h5>
//               <div className="flex gap-2 mb-3 justify-center">
//                 <button
//                   type="button"
//                   className={`w-[138px] py-2 px-4 rounded border-[1px] ${
//                     !isSeller ? "bg-brand1  text-gray9" : "bg-gray9  text-gray1"
//                   }`}
//                   onClick={() => {
//                     setIsSeller(false);
//                   }}
//                 >
//                   Comprador
//                 </button>
//                 <button
//                   type="button"
//                   className={`w-[138px] py-2 px-4 rounded border-[1px] ${
//                     isSeller ? "bg-brand1  text-gray9" : "bg-gray9 text-gray1"
//                   }`}
//                   onClick={() => {
//                     setIsSeller(true);
//                   }}
//                 >
//                   Anunciante
//                 </button>
//               </div>

//               <div className="m-2">
//                 <Input
//                   register={register}
//                   label="Senha"
//                   placeholder="Digitar senha"
//                   name="password"
//                 />
//               </div>
//               <div className="m-2">
//                 <Input
//                   register={register}
//                   label="Confirmar Senha"
//                   placeholder="Digitar senha"
//                   name="confirmarSenha"
//                 />
//                 {errors.confirmarSenha && (
//                   <span className="text-red-600">
//                     {errors.confirmarSenha.message}
//                   </span>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-[276px] py-2 px-4 rounded border-[1px] bg-brand1 text-gray9"
//               >
//                 Finalizar cadastro
//               </button>