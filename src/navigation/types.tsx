import { ImageSourcePropType } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';



export type newAddressProp = {
  addressData: any;
};

export type addNewAreaProps = {
  latitude?: number | null;
  longitude?: number | null;
  screen?: String;
  locationData?: locationType;
};

export type locationType = {
  id: number;
  address: string;
  country: string;
  status?: boolean;
};

export type locationProp = {
  data: locationType | any;
};

export type BlogType = {
  blogImage: ImageSourcePropType;
  title: string;
  detail: string;
  date: string;
  author: string;
  totalPost: number;
};

export type BlogDetailScreenProp = {
  blogData?: BlogType | any;
};

export type OngoingBookingProp = {
  extraCharges: {
    name: string;
    amount: string;
    noService: number;
  };
};

export type serviceProofProp = {
  serviceProofData: {
    serviceTitle: string;
    details: string;
    image: string;
  };
};

export type documentProps = {
  image: ImageSourcePropType;
};

export type packageDetailProp = {
  packagesData: {
    title: string;
    startDate: string;
    endDate: string;
    totalService: number;
    price: Float;
  };
};

export type CurrentLocationProp = {
  screen: string;
};

export type commissionDetailProps = {
  title: string;
};

export type loginProps = {
  serviceMenLogin: boolean;
};

export type StoreChatMessagesProps = {
  conversation_id?: string | number;
  delivery_man_id?: string | number;
  user_id?: string | number;
  name?:string | null
};
export type RootStackParamList = {
  NoInternet: undefined;
  AuthNavigation: undefined;
  IntroSlider: undefined;
  Login: loginProps | undefined;
  ForgotPassword: undefined;
  VerifyOtp: undefined;
  ResetPassword: undefined;
  CompanyDetails: undefined;
  CompanyLocation: undefined;
  AddressCurrentLocation: undefined;
  ProviderDetails: undefined;
  Register: locationProp | undefined;
  CurrentLocation: CurrentLocationProp | undefined;
  AddNewArea: addNewAreaProps | undefined;
  Subscription: undefined;
  SubscriptionPlan: undefined;
  BottomTab: undefined;
  BottomTabSeller: undefined;
  Earnings: undefined;
  History: undefined;
  AddNewService: undefined;
  AddNewServiceSubCategory: undefined;
  Notification: undefined;
  EmptyNotification: undefined;
  ServiceList: undefined;
  ServiceDetail: { id: string };
  LocationList: undefined;
  AddNewAddress: newAddressProp;
  FreelancerDetail: undefined;
  SplashScreen: undefined;
  Reviews: undefined;
  Categories: undefined;
  ServiceMenList: undefined;
  AddNewServiceMen: undefined;
  EditServiceMen: { id: string };
  LatestBlog: undefined;
  BlogDetail: BlogDetailScreenProp;
  PopularServiceView: undefined;
  MySubscriptions: { id: string | undefined };
  ServiceMenDetail: { id: string };
  Booking: undefined;
  PendingBooking: { id: string };
  OngoingBooking: { id: string };
  AcceptedBooking: { id: string };
  CompletedBooking: { id: string };
  CancelledBooking: { id: string };
  AssignedBooking: undefined;
  PendingApproval: undefined;
  HoldBooking: undefined;
  MapView: undefined;
  Chat: { id: string, toUserName: string };
  MultipleServiceMenList: undefined;
  AddExtraCharges: undefined;
  ServiceProof: serviceProofProp;
  CancelBooking: undefined;
  AppSetting: undefined;
  ChangeLanguage: undefined;
  ChangeCurrency: undefined;
  ChangePassword: undefined;
  CompanyDetail: locationProp;
  UserProfileSetting: undefined;
  BankDetails: undefined;
  IdVerification: undefined;
  DocumentPreview: documentProps;
  CommissionHistory: undefined;
  Packages: undefined;
  AddPackage: packageDetailProp | undefined;
  PackageDetail: undefined;
  TimeSlots: undefined;
  BookingDetails: undefined;
  CommissionInfo: undefined;
  CommissionDetail: commissionDetailProps;
  Cart: undefined;
  ChatHistory: undefined;
  ProviderInfo: undefined;
  FreeLancerDetails: undefined;
  LoaderScreen: undefined;
  CoverLocationList: { zone: string[] };
  EditBooking: { id: string };
  MoreMenus: undefined;
  ProfileSettings: undefined;
  ContentPages: { content_key: string }
  BusinessInformation: undefined;
  BusinessSettings: undefined;
  ProfileAccountInformation: undefined;
  ReportMenus: undefined;
  TransactionReports: undefined;
  BookingReports: undefined;
  BusinessReports: undefined;
  WithdrawRequest: undefined;
  WithdrawList: undefined;
  AdjustBalance: undefined;
  RazorPay: undefined;
  PaymentList: undefined;

  StoreRegister: undefined;
  StoreCompanyLocation: undefined;
  StoreProviderDetails: undefined;
  StoreCompanyDetails: undefined;
  StoreForgotPassword: undefined;
  StoreVerifyOtp: undefined;
  StoreAddressCurrentLocation: undefined;
  MoreMenusVendor: undefined;
  StoreResetPassword: undefined;
  VendorProfileSettings: undefined;
  VendorProfileEdit: undefined;
  SubCategories: { id: string, categoryname: string };
  NotificationVendor: undefined;
  VendorAddNewBanner: undefined;
  VendorAddItem: undefined;
  StoreSettings: undefined;
  StoreAddCoupon: undefined;
  StoreScheduleSettings: undefined;
  VendorCreateAddons: undefined;
  AboutUsContent: undefined;
  PrivacyPolicyContent: undefined;
  TermsAndConditionsContent: undefined;
  StoreUpdateAnnouncement: undefined;
  EditVendorItem: { id: string };
  EditVendorCoupon: { id: string };
  EditVendorAddon: { id: string, name: string, price: string };
  EditVendorBanner: { id: string, title: string, image: string, bannerLink: string };
  StoreCouponList:undefined;
  ListAddons:undefined;
  ListBanners:undefined;
  ListItem:undefined;
  VendorLogout:undefined;
  StoreOrders:undefined;
  StoreExpenseReports:undefined;
  StoreWallet:undefined;
  StoreHome:undefined;
  StoreOrderDetails:{ OrderId: string }
  StoreListCampaign:undefined;
  StoreChatHistory:undefined;
  StoreChatMessages:StoreChatMessagesProps
};
