import { Status } from "@/lib/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import API from "@/lib/http";
import { IInstituteCourseInitialData, ICourse } from "./instituteCourseType";

const initialState: IInstituteCourseInitialData = {
  status: Status.LOADING,
  courses: [
    { courseName: "nodejs", coursePrice: "999", id: "1" },
    { courseName: "reactjs", coursePrice: "999", id: "2" },
  ],
};

const instituteCourseSlice = createSlice({
  name: "institute-course-slice",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setCourse(state, action: PayloadAction<ICourse[]>) {
      state.courses = action.payload;
    },
    setDeleteCourse(state, action: PayloadAction<string>) {
      state.courses = state.courses.filter(course => course.id !== action.payload);
    },
    setEditCourse(state, action: PayloadAction<{ id: string; data: ICourse }>) {
      const { id, data } = action.payload;
      const index = state.courses.findIndex(course => course.id === id);
      if (index !== -1) {
        state.courses[index] = data;
      }
    },
  },
});

const { setStatus, setCourse, setDeleteCourse, setEditCourse } = instituteCourseSlice.actions;
export default instituteCourseSlice.reducer;

// -------------------------
// THUNKS
// -------------------------

export function createInstituteCourse(data: ICourse) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await API.post("/institute/course", data);
      if (response.status === 201) {
        dispatch(setStatus(Status.SUCCESS));
        // optionally, refetch course list here
        dispatch(fetchInstituteCourse());
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchInstituteCourse() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await API.get("/institute/course");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setCourse(response.data.data || []));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function deleteInstituteCourse(id: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await API.delete(`/institute/course/${id}`);
      if (response.status === 200) {
        dispatch(setDeleteCourse(id));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function editInstituteCourse(id: string, data: ICourse) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await API.patch(`/institute/course/${id}`, data);
      if (response.status === 200) {
        dispatch(setEditCourse({ id, data }));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
