import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input";


export interface IUserEditProfile {
    id?: string;
    name?: string;
    email?: string;
    cpf?: string;
    phone?: string;
    birthday?: string;
    description?: string; 
}

export default function UserDataForm(isEditForm: boolean) {

  const onSubmitForm = () => {}

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserEditProfile>({
    // resolver: yupResolver(SchemaRegisterUser),
  });


  return (
    <main className="flex justify-center">
      <h3 className="text-1xl font-semibold text-gray-800 m-2">
        Informações pessoais
      </h3>

      <form onSubmit={ handleSubmit(onSubmitForm) }>
        <div className="flex flex-col m-2">
          <div>
            <Input
              register={register}
              label="Nome"
              placeholder="Ex: Samantha Leana"
              name="name"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
        </div>
      </form>
    </main>
  );
}


