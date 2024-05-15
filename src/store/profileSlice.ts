import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileState, User } from "../lib/types";

const initialState: ProfileState = {
  details: {
    firstname: "",
    lastname: "",
    email: "",
    profileImage: "",
  },
};

// const savedDetails = localStorage.getItem("userDetails");
// if (savedDetails) {
//   initialState.details = JSON.parse(savedDetails);
// }

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    saveChanges: (state, action: PayloadAction<User>) => {
      state.details = action.payload;
      // localStorage.setItem("userDetails", JSON.stringify(action.payload));
    },
    updateImage: (state, action: PayloadAction<string>) => {
      state.details.profileImage = action.payload;
    },
  },
});

export const { saveChanges, updateImage } = profileSlice.actions;
export default profileSlice.reducer;
