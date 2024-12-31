export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role:ROLES;
}

export const ervinUser : User = {
  username: 'ErvinCas',
  role: ROLES.ADMIN
}
