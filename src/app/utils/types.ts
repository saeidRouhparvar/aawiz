export type Register = {
  username: string;
  password: string;
  name: string;
};

export type Login = {
  username: string;
  password: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
};
