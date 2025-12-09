import {FormEvent} from 'react';

export type cancelHeaderProps = {
  title: string;
  leftTitle?: string;
  gotoScreen?: (props: FormEvent<HTMLFormElement> | undefined) => void;
  onButtonClick?: (props: FormEvent<HTMLFormElement> | undefined) => void;
};
