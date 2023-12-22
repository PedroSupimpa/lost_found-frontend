import axios from "axios";

interface IUserRequest {
  name: string;
  phone: string;
  email: string;
  password: string;
  address: {
    zipcode: string;
    address: string;
    number: string;
  };
}

export const createUser = async (user: IUserRequest) => {
  await axios.post("http://localhost:3000/user", user);
};
