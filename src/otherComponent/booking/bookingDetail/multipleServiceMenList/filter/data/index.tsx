
export const experienceOptions: Array<ExperienceType> = [
  {
    label: 'servicemen.highestExperience',
    value: '1',
  },
  {
    label: 'servicemen.lowestExperience',
    value: '2',
  },
];

export type ExperienceType = {
  label: string;
  value: string;
};
