import {user, user1, user2, user3, user4} from '@utils/images';
import {ReviewType} from './types';

export const allReviews: Array<ReviewType> = [
  {
    user: user,
    name: 'reviews.user',
    time: '10',
    review: 'reviews.review',
    rating: '4.0',
  },
  {
    user: user1,
    name: 'reviews.user',
    time: '11',
    review: 'reviews.review',
    rating: '4.0',
  },
  {
    user: user2,
    name: 'reviews.user1',
    time: '12',
    review: 'reviews.review1',
    rating: '4.0',
  },
  {
    user: user3,
    name: 'reviews.user2',
    time: '13',
    review: 'reviews.review2',
    rating: '4.0',
  },
  {
    user: user4,
    name: 'reviews.user2',
    time: '14',
    review: 'reviews.review2',
    rating: '4.0',
  },
];
