import React, {FormEvent} from 'react';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

export type dashBoardType = {
  icon: React.ReactNode;
  name: string;
  totalService?: number;
  price?: Float;
  gotoScreen?: any;
  darkIcon: React.ReactNode;
};
