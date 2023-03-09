import { IObject } from "@/types/global";

export function simpleValidate(form:IObject<string|any>):Boolean {
  const allFilled = Object
    .values(form)
    ?.every(currField => !!currField);
  return allFilled || false;
};
