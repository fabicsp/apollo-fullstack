
export const Query = {
  getUser: async (obj, args, context, info) => {

    console.log("GET_USER");
    // const boards = await db.getBoards({ id: 5 });

    return { id: 5, email: 'test@test.com' };
  }
}