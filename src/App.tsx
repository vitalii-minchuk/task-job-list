import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/common/Layout';
import JobInfo from './pages/JobInfo';
import JobList from './pages/JobList';
import NotFound from './pages/NotFound';
import { fetchJobs } from './store/Slices/jobsSlice';
import { useAppDispatch } from './hooks/reduxHooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<JobList />} />
        <Route path="/info" element={<JobInfo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
