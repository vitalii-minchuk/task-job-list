import { createSlice } from '@reduxjs/toolkit';
import { JobsState } from '../../types';

const initialState: JobsState = {
  isLoading: false,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
});

// export const {} = jobsSlice.actions;
export default jobsSlice.reducer;
