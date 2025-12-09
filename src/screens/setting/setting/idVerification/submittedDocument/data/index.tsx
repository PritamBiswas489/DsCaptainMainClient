import {aadharCard, driverLicence, panCard, votingCard} from '@utils/images';
import {documentType, moreOptionType} from './types';

export const documents: Array<documentType> = [
  {
    name: 'identityDetails.drivingLicence',
    documentId: 'idVerification.id',
    isPending: false,
    image: driverLicence,
  },
  {
    name: 'idVerification.PANcard',
    isPending: true,
    image: panCard,
  },
  {
    name: 'idVerification.aaDharCard',
    documentId: 'idVerification.id',
    isPending: false,
    image: aadharCard,
  },
  {
    name: 'idVerification.votingCard',
    documentId: 'idVerification.id',
    isPending: false,
    image: votingCard,
  },
];

export const moreOptions: Array<moreOptionType> = [
  {
    id: 1,
    name: 'chat.callNow',
  },
  {
    id: 2,
    name: 'chat.clearChat',
  },
];
