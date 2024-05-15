import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Link, LinkState } from "@/lib/types";
import { defaultLinks } from "@/lib/data";

const initialState: LinkState = {
  links: defaultLinks,
};
// const savedLinks = localStorage.getItem("savedLinks");
// if (savedLinks) {
//   initialState.links = JSON.parse(savedLinks);
// }
export const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addNewLink: (state, action: PayloadAction<Link>) => {
      if (
        state.links.length === 0 ||
        state.links[state.links.length - 1].saved
      ) {
        state.links.push(action.payload);
      }
    },
    updateLinks: (
      state,
      action: PayloadAction<{ id: number; changes: Partial<Link> }>
    ) => {
      const { id, changes } = action.payload;
      const index = state.links.findIndex((link) => link.id === id);
      if (index !== -1) {
        state.links[index] = { ...state.links[index], ...changes };
        // localStorage.setItem("savedLinks", JSON.stringify(state.links));
      }
    },
    saveLinks: (
      state,
      action: PayloadAction<{ id: number; changes: Partial<Link> }>
    ) => {
      const { id, changes } = action.payload;
      const index = state.links.findIndex((link) => link.id === id);
      if (index !== -1 && !state.links[index].saved) {
        state.links[index] = { ...state.links[index], ...changes, saved: true };
        // localStorage.setItem("savedLinks", JSON.stringify(state.links));
      }
    },
    deleteLink: (state, action: PayloadAction<number>) => {
      state.links = state.links.filter((link) => link.id !== action.payload);
    },
  },
});

export const { addNewLink, deleteLink, updateLinks, saveLinks } =
  linkSlice.actions;
export default linkSlice.reducer;
