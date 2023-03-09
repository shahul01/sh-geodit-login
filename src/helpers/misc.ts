import { IObject } from "@/types/global";

export const urlPaths = {
  'login': "api/v1/users/login",
  'register': "api/v1/users/register"
};

export function simpleValidate(form:IObject<string|any>):Boolean {
  const allFilled = Object
    .values(form)
    ?.every(currField => !!currField);
  return allFilled || false;
};
