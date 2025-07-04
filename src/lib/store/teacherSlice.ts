import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ Define initial state type (optional but recommended)
interface TeacherState {
  teacherName: string;
  teacherPassword: string;
}

// ✅ Initial state
const initialState: TeacherState = {
  teacherName: "",
  teacherPassword: "",
};

// ✅ Slice creation
const teacherSlice = createSlice({
  name: "teacherSlice",
  initialState,
  reducers: {
    setTeacherName(state, action: PayloadAction<string>) {
      state.teacherName = action.payload; // Dynamic value instead of hardcoded "haha"
    },
    setTeacherPassword(state, action: PayloadAction<string>) {
      state.teacherPassword = action.payload; // Dynamic value instead of hardcoded "hehe"
    },
  },
});

// ✅ Export actions and reducer
export const { setTeacherName, setTeacherPassword } = teacherSlice.actions;
export default teacherSlice.reducer;
