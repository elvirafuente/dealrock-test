export type Dictionary = {
  [key: string]: string;
};

export type Username = string;
export type Password = string;

export interface UserLogin {
  username: Username;
  password: Password;
}

export interface UserInfo {
  id: string;
  username: string;
  full_name: string;
  avatar: string;
}
