import { teamType } from "../types/types";

export const findInArray = (array: teamType[], id: string) => {
  return array.find((itemInArray) => itemInArray.id === id);
};
