import { gql } from "@apollo/client";

export const GET_BOARD_QUERY = gql`
  query getBoard($where: BoardWhere!) {
    getBoard(where: $where) {
      id
      players
      type
      title
    }
  }
`;

export const GET_BOARDS_QUERY = gql`
  query getBoards($where: BoardWhere!, $limit: Int, $offset: Int) {
    getBoards(where: $where, limit: $limit, offset: $offset) {
      id
      players
      type
      title
    }
  }
`;