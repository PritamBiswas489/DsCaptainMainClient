import Svg, { Path , Rect, Circle, Line} from 'react-native-svg';

export const ProfileIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 20 20"
    fill="none"
  >
    {/* Head */}
    <Path
      d="M10 10.5C11.933 10.5 13.5 8.933 13.5 7C13.5 5.067 11.933 3.5 10 3.5C8.067 3.5 6.5 5.067 6.5 7C6.5 8.933 8.067 10.5 10 10.5Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Shoulders */}
    <Path
      d="M10 12C7.24 12 4.5 13.29 4.5 15V16.5C4.5 17.33 5.17 18 6 18H14C14.83 18 15.5 17.33 15.5 16.5V15C15.5 13.29 12.76 12 10 12Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);

export const StoreSettingsIcon = (props) => (
  <Svg
    width={props.width ? props.width : "27"}
    height={props.height ? props.height : "27"}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Store Roof */}
    <Path
      d="M3 4.5C3 4.224 3.224 4 3.5 4H20.5C20.776 4 21 4.224 21 4.5V6.5C21 6.776 20.776 7 20.5 7H3.5C3.224 7 3 6.776 3 6.5V4.5Z"
      fill={props.color ? props.color : "#D8DCDE"}
    />
    {/* Store Body */}
    <Path
      d="M4 8H20V18C20 18.552 19.552 19 19 19H5C4.448 19 4 18.552 4 18V8Z"
      fill={props.color ? props.color : "#D8DCDE"}
    />
    {/* Gear Icon (Settings) */}
    <Path
      d="M12 12.5C11.17 12.5 10.5 13.17 10.5 14C10.5 14.83 11.17 15.5 12 15.5C12.83 15.5 13.5 14.83 13.5 14C13.5 13.17 12.83 12.5 12 12.5ZM12 10.5C12.827 10.5 13.5 11.173 13.5 12C13.5 12.827 12.827 13.5 12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.173 11.173 10.5 12 10.5Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    <Path
      d="M16.12 14.19L17.32 13.56L16.69 12.33L15.26 12.8C15.09 12.42 14.83 12.08 14.51 11.8L14.97 10.39L13.74 9.76L13.18 11.18C12.82 11.09 12.41 11 12 11C11.59 11 11.18 11.09 10.82 11.18L10.26 9.76L9.03 10.39L9.49 11.8C9.17 12.08 8.91 12.42 8.74 12.8L7.31 12.33L6.68 13.56L7.88 14.19C7.77 14.46 7.7 14.74 7.7 15C7.7 15.26 7.77 15.54 7.88 15.81L6.68 16.44L7.31 17.67L8.74 17.2C8.91 17.58 9.17 17.92 9.49 18.2L9.03 19.61L10.26 20.24L10.82 18.82C11.18 18.91 11.59 19 12 19C12.41 19 12.82 18.91 13.18 18.82L13.74 20.24L14.97 19.61L14.51 18.2C14.83 17.92 15.09 17.58 15.26 17.2L16.69 17.67L17.32 16.44L16.12 15.81C16.23 15.54 16.3 15.26 16.3 15C16.3 14.74 16.23 14.46 16.12 14.19Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);

export const AnnouncementIcon = (props) => (
  <Svg
    width={props.width ? props.width : "27"}
    height={props.height ? props.height : "27"}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Megaphone Body */}
    <Path
      d="M3 10C3 9.448 3.448 9 4 9H13C13.552 9 14 9.448 14 10V14C14 14.552 13.552 15 13 15H4C3.448 15 3 14.552 3 14V10Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Megaphone Handle */}
    <Path
      d="M6 15V18C6 18.552 6.448 19 7 19H8C8.552 19 9 18.552 9 18V15H6Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Megaphone Sound Lines */}
    <Path
      d="M15 10H16.5C16.776 10 17 10.224 17 10.5V13.5C17 13.776 16.776 14 16.5 14H15V10Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    <Path
      d="M18.5 9C18.776 9 19 9.224 19 9.5V14.5C19 14.776 18.776 15 18.5 15C18.224 15 18 14.776 18 14.5V9.5C18 9.224 18.224 9 18.5 9Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    <Path
      d="M20 8C20.276 8 20.5 8.224 20.5 8.5V15.5C20.5 15.776 20.276 16 20 16C19.724 16 19.5 15.776 19.5 15.5V8.5C19.5 8.224 19.724 8 20 8Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);

export const AddItemIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 20 20"
    fill="none"
  >
    {/* Circle */}
    <Path
      d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Plus Symbol - Vertical Line */}
    <Path
      d="M10 5C9.447 5 9 5.447 9 6V9H6C5.447 9 5 9.447 5 10C5 10.553 5.447 11 6 11H9V14C9 14.553 9.447 15 10 15C10.553 15 11 14.553 11 14V11H14C14.553 11 15 10.553 15 10C15 9.447 14.553 9 14 9H11V6C11 5.447 10.553 5 10 5Z"
      fill={props.plusColor ? props.plusColor : '#FFFFFF'}
    />
  </Svg>
);

export const PendingItemIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 20 20"
    fill="none"
  >
    {/* Circle */}
    <Path
      d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Clock face */}
    <Path
      d="M10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2ZM10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16Z"
      fill={props.clockFaceColor ? props.clockFaceColor : '#FFFFFF'}
    />
    {/* Clock hands */}
    <Path
      d="M11 7C11 6.447 10.553 6 10 6C9.447 6 9 6.447 9 7V10C9 10.265 9.105 10.52 9.293 10.707L11.293 12.707C11.488 12.902 11.744 13 12 13C12.256 13 12.512 12.902 12.707 12.707C13.098 12.316 13.098 11.684 12.707 11.293L11 9.586V7Z"
      fill={props.clockHandsColor ? props.clockHandsColor : '#FFFFFF'}
    />
  </Svg>
);
export const CategoriesIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 20 20"
    fill="none"
  >
    {/* Square 1 */}
    <Path
      d="M3 3H7V7H3V3Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Square 2 */}
    <Path
      d="M3 13H7V17H3V13Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Square 3 */}
    <Path
      d="M13 3H17V7H13V3Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Square 4 */}
    <Path
      d="M13 13H17V17H13V13Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);
export const BannerIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 20 20"
    fill="none"
  >
    {/* Banner Shape */}
    <Path
      d="M3 2H17C17.553 2 18 2.447 18 3V17C18 17.553 17.553 18 17 18H3C2.447 18 2 17.553 2 17V3C2 2.447 2.447 2 3 2Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Triangle */}
    <Path
      d="M10 8L14 12H6L10 8Z"
      fill={props.triangleColor ? props.triangleColor : '#FFFFFF'}
    />
  </Svg>
);

export const CampaignIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 20 20"
    fill="none"
  >
    {/* Megaphone Shape */}
    <Path
      d="M2 7V13C2 14.1046 2.89543 15 4 15H6L11 18V2L6 5H4C2.89543 5 2 5.89543 2 7Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Sound Lines */}
    <Path
      d="M14 6V14M16 4V16M18 2V18"
      stroke={props.soundLineColor ? props.soundLineColor : '#FFFFFF'}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const CouponIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 20 20"
    fill="none"
  >
    {/* Coupon Shape */}
    <Path
      d="M4 3C3.447 3 3 3.447 3 4V6C4.105 6 5 6.895 5 8C5 9.105 4.105 10 3 10V12C4.105 12 5 12.895 5 14C5 15.105 4.105 16 3 16V18C3 18.553 3.447 19 4 19H16C16.553 19 17 18.553 17 18V16C15.895 16 15 15.105 15 14C15 12.895 15.895 12 17 12V10C15.895 10 15 9.105 15 8C15 6.895 15.895 6 17 6V4C17 3.447 16.553 3 16 3H4Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Dotted Line */}
    <Path
      d="M5 5H15V15H5V5Z"
      stroke={props.dottedLineColor ? props.dottedLineColor : '#FFFFFF'}
      strokeDasharray="2,2"
    />
    {/* Percentage Symbol */}
    <Path
      d="M7 7C7.552 7 8 6.552 8 6C8 5.448 7.552 5 7 5C6.448 5 6 5.448 6 6C6 6.552 6.448 7 7 7Z"
      fill={props.symbolColor ? props.symbolColor : '#FFFFFF'}
    />
    <Path
      d="M13 13C13.552 13 14 12.552 14 12C14 11.448 13.552 11 13 11C12.448 11 12 11.448 12 12C12 12.552 12.448 13 13 13Z"
      fill={props.symbolColor ? props.symbolColor : '#FFFFFF'}
    />
    <Path
      d="M8 12L12 8"
      stroke={props.symbolColor ? props.symbolColor : '#FFFFFF'}
      strokeWidth="2"
    />
  </Svg>
);


export const SubscriptionsIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 20 20"
    fill="none"
  >
    {/* Subscription Rectangles (to represent a list of items) */}
    <Rect
      x="3"
      y="4"
      width="14"
      height="2"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    <Rect
      x="3"
      y="8"
      width="14"
      height="2"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    <Rect
      x="3"
      y="12"
      width="14"
      height="2"
      fill={props.color ? props.color : '#D8DCDE'}
    />

    {/* Small bell icon to symbolize notifications or ongoing subscriptions */}
    <Path
      d="M15.5 17C15.5 16.4477 15.0523 16 14.5 16H13.5C13.2239 16 13 16.2239 13 16.5C13 16.7761 13.2239 17 13.5 17H14.5C14.7761 17 15 17.2239 15 17.5V17.75C15 18.1642 14.6642 18.5 14.25 18.5H5.75C5.33579 18.5 5 18.1642 5 17.75V17.5C5 17.2239 5.22386 17 5.5 17H6.5C6.77614 17 7 16.7761 7 16.5C7 16.2239 6.77614 16 6.5 16H5.5C4.94772 16 4.5 16.4477 4.5 17V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H14.25C15.2165 19.5 16 18.7165 16 17.75V17.5C16 17.2239 15.7761 17 15.5 17Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);
 

export const ChatIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Speech Bubble */}
    <Path
      d="M20 2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H18L22 24V4C22 2.9 21.1 2 20 2Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);
 
export const SettingsIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Outer Gear */}
    <Path
      d="M19.14 12.94C19.19 12.64 19.22 12.33 19.22 12C19.22 11.67 19.19 11.36 19.14 11.06L21.19 9.47C21.34 9.34 21.39 9.11 21.31 8.9L19.31 4.98C19.23 4.78 19.03 4.68 18.82 4.72L16.47 5.2C16.07 4.91 15.65 4.67 15.2 4.5L14.85 2.15C14.82 1.94 14.64 1.8 14.42 1.8H9.57C9.35 1.8 9.17 1.94 9.14 2.15L8.79 4.5C8.34 4.67 7.92 4.91 7.52 5.2L5.17 4.72C4.96 4.68 4.76 4.78 4.68 4.98L2.68 8.9C2.6 9.11 2.65 9.34 2.8 9.47L4.85 11.06C4.8 11.36 4.78 11.67 4.78 12C4.78 12.33 4.8 12.64 4.85 12.94L2.8 14.53C2.65 14.66 2.6 14.89 2.68 15.1L4.68 19.02C4.76 19.22 4.96 19.32 5.17 19.28L7.52 18.8C7.92 19.09 8.34 19.33 8.79 19.5L9.14 21.85C9.17 22.06 9.35 22.2 9.57 22.2H14.42C14.64 22.2 14.82 22.06 14.85 21.85L15.2 19.5C15.65 19.33 16.07 19.09 16.47 18.8L18.82 19.28C19.03 19.32 19.23 19.22 19.31 19.02L21.31 15.1C21.39 14.89 21.34 14.66 21.19 14.53L19.14 12.94ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);


 

export const WithdrawListIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* List Lines */}
    <Rect x="4" y="6" width="16" height="2" fill={props.color ? props.color : '#D8DCDE'} />
    <Rect x="4" y="10" width="16" height="2" fill={props.color ? props.color : '#D8DCDE'} />
    <Rect x="4" y="14" width="16" height="2" fill={props.color ? props.color : '#D8DCDE'} />

    {/* Withdraw Icon (arrow pointing out) */}
    <Path
      d="M13 19V16H8V14H13V11L17 15L13 19Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);

export const PaymentIcon = ({ width = '27', height = '27', color = '#D8DCDE' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Card Background */}
    <Rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill={color} />

    {/* Card Stripe */}
    <Rect x="2" y="9" width="20" height="2" fill="#FFFFFF" />

    {/* Card Details - Left */}
    <Rect x="4" y="13" width="6" height="2" fill="#FFFFFF" />
    <Rect x="4" y="16" width="6" height="2" fill="#FFFFFF" />

    {/* Card Details - Right */}
    <Rect x="14" y="13" width="6" height="5" fill="#FFFFFF" />

    {/* Payment Icon (Dollar Sign) */}
    <Path
      d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6H8C8 3.8 9.8 2 12 2C14.2 2 16 3.8 16 6C16 7.7 14.9 9 13.3 9.6L13.3 9.6C12.9 9.8 12.5 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12H16C16 14.2 14.2 16 12 16C10.8 16 9.8 15.4 9.3 14.5C9.1 14.1 9 13.6 9 13H10.7C10.9 13.8 11.4 14.4 12 14.4C12.6 14.4 13.1 14 13.3 13.5L13.3 13.5C13.5 13.1 13.6 12.6 13.6 12H10C10 11.2 10.5 10.6 11.2 10.2L11.2 10.2C11.6 10 12 9.7 12 9.3V8Z"
      fill="#FFFFFF"
    />
  </Svg>
);


export const ReportsIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Document Outline */}
    <Path
      d="M5 2C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V7.82843C20 7.29799 19.7893 6.78929 19.4142 6.41421L14.5858 1.58579C14.2107 1.21071 13.702 1 13.1716 1H5ZM14 4.41421L17.5858 8H14V4.41421Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Bar Chart Elements */}
    <Rect x="7" y="13" width="2" height="5" fill={props.color ? props.color : '#D8DCDE'} />
    <Rect x="11" y="10" width="2" height="8" fill={props.color ? props.color : '#D8DCDE'} />
    <Rect x="15" y="8" width="2" height="10" fill={props.color ? props.color : '#D8DCDE'} />
  </Svg>
);




 

export const AboutUsIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Circle Outline */}
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
    />
    {/* Information "i" Symbol */}
    <Path
      d="M12 16C11.4477 16 11 15.5523 11 15V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V15C13 15.5523 12.5523 16 12 16Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    <Path
      d="M12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8Z"
      fill={props.color ? props.color : '#D8DCDE'}
    />
  </Svg>
);

 

export const PrivacyPolicyIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Shield Shape */}
    <Path
      d="M12 2C12.36 2 12.7 2.08 13.02 2.24L19.5 5.45C19.78 5.59 20 5.91 20 6.26V12.25C20 15.85 17.81 19.06 14.42 20.67L12.66 21.53C12.24 21.73 11.76 21.73 11.34 21.53L9.58 20.67C6.19 19.06 4 15.85 4 12.25V6.26C4 5.91 4.22 5.59 4.5 5.45L10.98 2.24C11.3 2.08 11.64 2 12 2Z"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
      fill={props.color ? props.color : '#D8DCDE'}
    />
    {/* Lock Shape */}
    <Path
      d="M9 11V9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9V11H16C16.55 11 17 11.45 17 12V16C17 16.55 16.55 17 16 17H8C7.45 17 7 16.55 7 16V12C7 11.45 7.45 11 8 11H9ZM11 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11Z"
      fill="white"
    />
  </Svg>
);

 

export const TermsConditionsIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Document Outline */}
    <Path
      d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V7L14 2H6Z"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
      fill={props.color ? props.color : 'none'}
    />
    {/* Document Lines */}
    <Line x1="8" y1="10" x2="16" y2="10" stroke={props.color ? props.color : '#D8DCDE'} strokeWidth="2"/>
    <Line x1="8" y1="14" x2="16" y2="14" stroke={props.color ? props.color : '#D8DCDE'} strokeWidth="2"/>
    <Line x1="8" y1="18" x2="12" y2="18" stroke={props.color ? props.color : '#D8DCDE'} strokeWidth="2"/>
  </Svg>
);


 

export const RefundPolicyIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Document Outline */}
    <Path
      d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V7L14 2H6Z"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
      fill={props.color ? props.color : 'none'}
    />
    {/* Refund Arrow Circle */}
    <Circle
      cx="12"
      cy="13"
      r="4"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
    />
    {/* Refund Arrow */}
    <Path
      d="M12 10V13H14"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 11L12 13"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

 

export const LogoutIcon = (props) => (
  <Svg
    width={props.width ? props.width : '27'}
    height={props.height ? props.height : '27'}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Door Outline */}
    <Path
      d="M7 2C6.44772 2 6 2.44772 6 3V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V3C18 2.44772 17.5523 2 17 2H7Z"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
      fill={props.color ? props.color : 'none'}
    />
    {/* Arrow for Logout */}
    <Path
      d="M10 16L14 12L10 8"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 12H4"
      stroke={props.color ? props.color : '#D8DCDE'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);







