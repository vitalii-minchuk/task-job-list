import { JobType } from '../../types';
import Divider from '../common/Divider';

interface IAttachedJobInages {
  job: JobType | null;
}

function AttachedJobInages({ job }: IAttachedJobInages) {
  return (
    <div>
      <h3 className="my-title">Attached images</h3>
      <div className="w-3/4 mt-[10px] mb-[15px] lg:w-full">
        <Divider />
      </div>
      <div className="flex gap-[8px] overflow-scroll">
        {job?.pictures.map((picture, i) => (
          <div
            key={i}
            className="min-w-[205px] h-[115px] rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={picture}
              alt={`${picture}_${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttachedJobInages;
