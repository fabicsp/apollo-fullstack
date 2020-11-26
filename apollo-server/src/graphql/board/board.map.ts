
import { BoardInterface } from '../../db/index';

export const BoardMap = {
  title: (obj: BoardInterface): string => {
    console.log("OBJ: ", obj);
    return `TITLE: ${obj.title}`;
  },
  counter: () => {
    return 5
  }
}