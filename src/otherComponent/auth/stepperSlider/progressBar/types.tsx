export type progressTypes = {
  renderProgressIndicator: () => React.ReactNode;
  renderScreen: () => React.ReactNode;
  handleNextStep: () => void;
  handlePrevStep:()=>void;
  currentStep: number;
  stepCount: number;
};
