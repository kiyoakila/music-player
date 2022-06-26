import { createStore, action } from "easy-peasy";

export const store = createStore({
  // states to keep track of
  activeSongs: [],
  activeSong: null,
  // actions to change states.
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload;
  }),
});
