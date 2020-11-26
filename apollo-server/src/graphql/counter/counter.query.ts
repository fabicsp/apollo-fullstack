import { count } from "./counter.mutation";

export const Query = {

  getCount: async (obj, args, context, info): Promise<number> => {

    console.log("OBJ: ", obj);
    console.log("CONTEXT: ", context);
    console.log("INFO: ", info);
    return count;
  }
};