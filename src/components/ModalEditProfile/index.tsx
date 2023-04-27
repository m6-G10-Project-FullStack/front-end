import React, { useState } from "react";
import Select from "../Select";
import { Button } from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "inspector";
import { RxDragHandleDots1 } from "react-icons/rx";
import api from "../../services/api";
import { AuthContext, useAuth } from "../../contexts/authContext";
import { iUser } from "../../@types";

export interface iUserEditProfile {
  id?: string;
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthday?: string;
  description?: string; 
}


const ModalEditProfile = ({

  const FormSchema:<iUserEditProfile> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    cpf: yup.number().notRequired(),
    phone: yup.string().notRequired(),
    birthday: yup.number().notRequired(),
    description: yup.string().notRequired(),    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    resolver: yupResolver(FormSchema),
  });



  const onSubmitForm = async (data: any) => {
    console.log(data);
   
    const editedProfile = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone,
      birthday: data.birthday,      
      description: data.description,
      
    };



  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar perfil</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              type="text"
              placeholder={user.name ?? "Digite seu nome"}
              error={errors.name?.message}
              {...register("name")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="text"
              placeholder={user.email ?? "Digite seu email"}
              error={errors.email?.message}
              {...register("email")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <Input
              id="cpf"
              type="text"
              placeholder={user.cpf?.toString() ?? "Digite seu CPF"}
              error={errors.cpf?.message}
              {...register("cpf")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <Input
              id="phone"
              type="text"
              placeholder={user.phone ?? "Digite seu telefone"}
              error={errors.phone?.message}
              {...register("phone")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="birthday">Data de nascimento</label>
            <Input
              id="birthday"
              type="text"
              placeholder={user.birthday?.toString() ?? "Digite sua data de nascimento"}
              error={errors.birthday?.message}
              {...register("birthday")}
            />
          </div>

          <div className="form-group">
     <label htmlFor="description">Descrição</label>
       <Input
    id="description"
    type="text"
    placeholder={user.description ?? "Digite sua descrição"}
    error={errors.description?.message}
    {...register("description")}
  />
  </div>
    
  )

export default ModalEditProfile;
