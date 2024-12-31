import { channel } from "diagnostics_channel";
import { User,ROLES } from "./01-enums"


const currentUser:User = {
  username:'ErvinCas',
  role: ROLES.CUSTOMER
}
export const checkAdminRole = () => {
  if (currentUser.role === 'admin'){
    return true;
  }
  return false;
}
const rta = checkAdminRole();
console.log(rta);


export const checkRoleV2 = (roles: string[]) => {
  if (currentUser.role === 'admin'){
    return true;
  }
  return false;
}

const rta2 =  checkRoleV2([ROLES.ADMIN,ROLES.CUSTOMER]);
console.log(rta2);

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN,ROLES.CUSTOMER);
console.log(rta4);

