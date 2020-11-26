import * as db from '../../db';

export const Query = {

  getBoard: async (obj, args, context, info)=> {
    
    const { where = {} } = args || {};
    const { id: boardId } = where || {};

    const board = await db.getBoard({ id: boardId });

    console.log("BOARD: ", board);
    return board;
  },
  getBoards: async (obj, args, context, info)=> {
    
    const { where = {} } = args || {};
    const { id: boardId } = where || {};

    const boards = await db.getBoards({ id: boardId });

    console.log("BOARDS: ", boards);
    return boards;
  },
}