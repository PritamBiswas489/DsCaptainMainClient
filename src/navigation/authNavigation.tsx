import React from 'react';
import {RootStack} from './RootStackNavigator';
import {
  SplashScreen,
  IntroSlider,
  ForgotPassword,
  VerifyOtp,
  ResetPassword,
  Register,
  CompanyLocation,
  ProviderDetails,
  CompanyDetails,
  Login,
  FreeLancerDetails,
  LoaderScreen,
  StoreRegister,
  StoreCompanyLocation,
  StoreProviderDetails,
  StoreCompanyDetails,
  StoreForgotPassword,
  StoreResetPassword,
  StoreVerifyOtp,
} from '../screens';

//import {SplashScreen} from '@screens/splash';

export default function AuthNavigation() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="IntroSlider" component={IntroSlider} />
      <RootStack.Screen name="Login" component={Login} />
      {/***** * forget password panel *******/}
      <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <RootStack.Screen name="VerifyOtp" component={VerifyOtp} />
      <RootStack.Screen name="ResetPassword" component={ResetPassword} />
      {/******* end of forget password panel ********/}
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="CompanyLocation" component={CompanyLocation} />
      <RootStack.Screen name="ProviderDetails" component={ProviderDetails} />
      <RootStack.Screen name="FreelancerDetail" component={FreeLancerDetails} />
      <RootStack.Screen name="CompanyDetails" component={CompanyDetails} />
      <RootStack.Screen name="LoaderScreen" component={LoaderScreen} />
      {/**********   store auth   *******************/}
      <RootStack.Screen name="StoreRegister" component={StoreRegister} />
      <RootStack.Screen name="StoreCompanyLocation" component={StoreCompanyLocation} />
      <RootStack.Screen name="StoreProviderDetails" component={StoreProviderDetails} />
      <RootStack.Screen name="StoreCompanyDetails" component={StoreCompanyDetails} />
      <RootStack.Screen name="StoreForgotPassword" component={StoreForgotPassword} />
      <RootStack.Screen name="StoreVerifyOtp" component={StoreVerifyOtp} />
      <RootStack.Screen name="StoreResetPassword" component={StoreResetPassword} />
    </RootStack.Navigator>
  );
}
