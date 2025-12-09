
export type TextInputViewProps =  {
    errors: {
      currentPassword: string;
      newPassword: string;
      confirmPassword: string;
    };
    setErrors: React.Dispatch<
      React.SetStateAction<{
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
      }>
    >;
    form: {
      currentPassword: string;
      newPassword: string;
      confirmPassword: string;
    };
    setForm: React.Dispatch<
      React.SetStateAction<{
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
      }>
    >;
  }