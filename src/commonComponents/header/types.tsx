import {ViewStyle} from 'react-native';
import React, {FormEvent} from 'react';

export type headerTypes = {
  showBackArrow?: boolean;
  title: string;
  trailIcon?: React.ReactNode;
  circleStyle?: ViewStyle;
  gotoScreen?: (props: FormEvent<HTMLFormElement> | undefined) => void;
  trailIcon1?: React.ReactNode;
  onTrailIcon?: (props: FormEvent<HTMLFormElement> | undefined) => void;
  content?: React.ReactNode;
  trail1IconContainer?: ViewStyle;
  containerStyle?: ViewStyle;
  showSearchBar?: boolean;
  searchContainerStyle?: ViewStyle;
  subscribeServiceBtn?:React.ReactNode;
};
