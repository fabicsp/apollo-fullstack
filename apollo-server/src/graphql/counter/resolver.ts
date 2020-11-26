import { Query } from './counter.query';
import { CounterMap } from "./counter.map";
import { Mutation } from "./counter.mutation";

export const resolver = {
  Query: Query,
  Mutation: Mutation,
  Counter: CounterMap,
};