import { useNavigate } from 'react-router-dom';

import SmallMap from '../components/SmallMap';
import { useAppSelector } from '../hooks/reduxHooks';

function JobInfo() {
  const { currentJob } = useAppSelector((state) => state.jobs);
  const navigate = useNavigate();

  return (
    <main>
      {currentJob?.title}
      <SmallMap location={currentJob?.location} />
      <button type="button" onClick={() => navigate(-1)}>
        back
      </button>
    </main>
  );
}

export default JobInfo;
