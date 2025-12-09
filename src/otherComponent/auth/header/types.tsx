import {locationType} from '@screens/auth/provider/register/companyLocation/addNewArea/types';
import {FormEvent} from 'react';
import {ViewStyle} from 'react-native';

export interface signUpComponentProps {
  authTitle: string;
  content: string;
  showBack: boolean;
  gotoScreen?: (props: FormEvent<HTMLFormElement> | undefined) => void;
  containerStyle?: ViewStyle;
}

export interface progressIndicatorProps {
  currentStep: number;
  stepCount: number;
  handlePrevStep:()=>void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  progress: any;
  data?: locationType;
  processRegistration:(data:FormData)=>void;
}
