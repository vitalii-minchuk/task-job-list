/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JobsState, JobType } from '../../types';

const initialState: JobsState = {
  isLoading: false,
  fetchError: '',
  jobs: [],
  currentJob: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    fetchJobs(state) {
      state.isLoading = true;
    },
    fetchJobsSuccess(state, action: PayloadAction<JobType[]>) {
      state.jobs = action.payload;
      state.isLoading = false;
    },
    fetchJobsFailure(state, action: PayloadAction<string>) {
      state.fetchError = action.payload;
      state.isLoading = false;
    },
    setCurrentJob(state, action: PayloadAction<JobType>) {
      state.currentJob = action.payload;
    },
  },
});

export const { fetchJobs, fetchJobsFailure, fetchJobsSuccess, setCurrentJob } =
  jobsSlice.actions;
export default jobsSlice.reducer;
