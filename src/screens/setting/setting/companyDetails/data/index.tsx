export const addressData: Array<addressType> = [
  {
    id: 0,
    address: 'location.location',
    country: 'location.locationCountry',
    status: false,
  },
  {
    id: 1,
    address: 'location.location1',
    country: 'location.locationCountry1',
    status: false,
  },
  {
    id: 2,
    address: 'location.location2',
    country: 'location.locationCountry',
    status: false,
  },
  {
    id: 3,
    address: 'location.location3',
    country: 'location.locationCountry1',
    status: false,
  },
];

export type addressType = {
  id: number;
  address: string;
  country: string;
  status: boolean;
};
