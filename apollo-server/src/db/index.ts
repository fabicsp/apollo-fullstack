

export interface BoardInterface {
  id: number,
  players: number,
  type: number,
  title: string,
  description: string,
};

export interface UserInterface {
  id: number,
  role: number,
  email: string,
  password: string,
}

export const getBoard = ({ id }: { id: number }): Promise<BoardInterface> => 
  new Promise<BoardInterface>(
    res => {
      setTimeout(()=> res({ id, players: 1, type: 5, title: `Table ${id}`, description: `Feel free to join to table ${id}` }), 2000);
    }
  );

export const getBoards = ({ id }: { id: number }): Promise<BoardInterface[]> => 
  new Promise<BoardInterface[]>(
    res => {
      setTimeout(()=> {
        const r = [];
        for (let i = 0; i < 20; i++) {
          r.push({ id: i, players: 1, type: 5, title: `Table ${i}`, description: `Feel free to join to table ${i}` });
        }
        res(r);
      }, 2000);
    }
  );

export const getUser = ({ id }: { id: number }): Promise<UserInterface> => 
  new Promise<UserInterface>(
    res => {
      setTimeout(()=> res(users[0]), 2000);
    }
  );

const users = [
  { id: 1, role: 1, email: 'admin@admin.admin', password: 'hashed_password' },
  { id: 2, role: 2, email: 'user@user.user', password: 'hashed_password' },
  { id: 3, role: 2, email: 'user2@user.user', password: 'hashed_password' },
]