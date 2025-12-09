
export const bookingFilterData: Array<bookingType> = [
  {
    label:'booking.allBooking',
    value: '1',
  },
  {
    label:'bookingDetail.pendingBooking',
    value: '2',
  },
  {
    label:'booking.acceptedBooking',
    value: '3',
  },
  {
    label:'booking.assignedBooking',
    value: '4',
  },
  {
    label:'booking.pendingApproval',
    value: '5',
  },
  {
    label:'booking.ongoingBooking',
    value: '6',
  },
  {
    label:'booking.holdBooking',
    value: '7',
  },
];

export type bookingType = {
  label: string;
  value: string;
};
