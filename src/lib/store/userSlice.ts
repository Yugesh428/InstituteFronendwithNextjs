// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ Define type for state
export interface IUserInitialState {
  name: string | null;
  address: string | null;
}

// ✅ Initial state with null values
const userInitialState: IUserInitialState = {
  name: null,
  address: null,
};

// ✅ Create slice
const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    sethaha(state, action: PayloadAction<string>) {
      console.log("sethaha called with", action.payload);
      // You can add any logic here if needed
    },
  },
});

// ✅ Export actions and reducer
export const { setName, setAddress, sethaha } = userSlice.actions;
export default userSlice.reducer;
