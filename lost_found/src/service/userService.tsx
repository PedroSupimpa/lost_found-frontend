import axios from "axios";

export interface IUserRequest {
  name: string;
  phone?: string;
  email: string;
  password: string;
  address?: {
    zipcode: string;
    address: string;
    number: string;
  };
}

export const createUser = async (user: IUserRequest) => {
  await axios.post("http://localhost:3000/user", user);
};

export const login = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:3000/user/login", {
    email,
    password,
  });
  return response.data;
};
