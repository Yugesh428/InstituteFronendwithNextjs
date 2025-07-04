// studentSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ Interface for the payload and state
interface IIncomingUserPayload {
  name: string;
  address: string;
  age: number;
}

interface IInitialStudentData {
  data: IIncomingUserPayload;
}

// ✅ Initial state with matching object structure
const initialStudentData: IInitialStudentData = {
  data: {
    name: "",
    address: "",
    age: 0,
  },
};

// ✅ Create student slice
const studentSlice = createSlice({
  name: "studentSlice",
  initialState: initialStudentData,
  reducers: {
    setData(state, action: PayloadAction<IIncomingUserPayload>) {
      state.data = action.payload;
    },
  },
});

// ✅ Export actions and reducer
export const { setData } = studentSlice.actions;
export default studentSlice.reducer;
