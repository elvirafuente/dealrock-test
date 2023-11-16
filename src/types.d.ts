export type Dictionary = {
  [key: string]: string;
};

export type Username = string;
export type Password = string;

export interface UserLogin {
  username: Username;
  password: Password;
}
