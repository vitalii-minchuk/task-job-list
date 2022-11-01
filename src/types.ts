export type JobsState = {
  isLoading: boolean;
  fetchError: string;
  jobs: JobType[];
  currentJob: JobType | null;
};

export type JobType = {
  id: string;
  address: string;
  benefits: Array<string>;
  description: string;
  email: string;
  employment_type: Array<string>;
  location: LocationType;
  name: string;
  phone: string;
  pictures: Array<string>;
  salary: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type LocationType = {
  lat: number;
  long: number;
};
