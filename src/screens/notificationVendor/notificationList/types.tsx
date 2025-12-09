import {ImageSourcePropType} from 'react-native';

export type NotificationListType = {
  title: string;
  time: string;
  content: string;
  icon: React.ReactNode;
  image?: ImageSourcePropType;
  notificationStatus: boolean;
  person?: ImageSourcePropType;
};
