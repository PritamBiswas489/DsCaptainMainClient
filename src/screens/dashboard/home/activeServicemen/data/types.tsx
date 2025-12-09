import {ImageSourcePropType} from 'react-native';

export type serviceMenType = {
  id: string;
  user_id: string;
  provider_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  identification_number: string;
  identification_type: string;
  identification_image: [],
  gender: string,
  profile_image: string;
  is_active:number;
  created_at: string
};
