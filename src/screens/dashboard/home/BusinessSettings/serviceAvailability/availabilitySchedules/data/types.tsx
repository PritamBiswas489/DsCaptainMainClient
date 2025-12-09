export type slotsType = {
  id: number;
  day: string;
  startAt: number;
  endAt: number;
  status: boolean;
};

export type propsType = {
  setTimeModal: React.Dispatch<React.SetStateAction<boolean>>;
  hour: number | undefined;
  minutes: number | undefined;
  data: any;
  toggleSwitch: any;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
