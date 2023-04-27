export interface iUser {
  id?: string;
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthday?: string;
  description?: string;
  is_seller?: true;
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: null | string;
  color?: string;
  cars?: string[];
}

export interface iUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthday: string;
  description: string;
  is_seller: true;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: null | string;
  color: string;
  cars: string[];
}
