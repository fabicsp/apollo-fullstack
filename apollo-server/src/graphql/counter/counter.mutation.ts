
export let count = 0;

export const Mutation = {
  addOne: async (obj, args, context, info)=> {

    count ++;

    return count;
  },
  addMany: async (obj, { amount = 0 }, context, info)=> {

    console.log(amount);
    count += amount;
    return count;
  }
};