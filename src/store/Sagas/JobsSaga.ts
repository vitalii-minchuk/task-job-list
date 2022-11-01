import { put, takeEvery } from '@redux-saga/core/effects';
import getData from '../../api';
import { JobType } from '../../types';
import {
  fetchJobs,
  fetchJobsFailure,
  fetchJobsSuccess,
} from '../Slices/jobsSlice';

export function* fetchJobsSaga() {
  try {
    const data: JobType[] = yield getData();
    yield put(fetchJobsSuccess(data));
  } catch (error: any) {
    yield put(fetchJobsFailure(error.message));
  }
}

export function* rootJobsSaga() {
  yield takeEvery(fetchJobs.type, fetchJobsSaga);
}
