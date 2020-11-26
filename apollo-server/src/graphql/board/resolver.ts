
import { Query } from './board.query';
import { BoardMap } from './board.map';


export const resolver = {
  Query,
  Board: BoardMap,
}