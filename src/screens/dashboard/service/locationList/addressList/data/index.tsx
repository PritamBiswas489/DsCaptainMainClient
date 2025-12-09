export const addressData: Array<addressType> = [
  {
    id: 0,
    address: 'location.location',
    country: 'location.locationCountry',
  },
  {
    id: 1,
    address: 'location.location1',
    country: 'location.locationCountry1',
  },
  {
    id: 2,
    address: 'location.location2',
    country: 'location.locationCountry',
  },
  {
    id: 3,
    address: 'location.location3',
    country: 'location.locationCountry1',
  },
];

export type addressType = {
  id: number;
  address: string;
  country: string;
};
