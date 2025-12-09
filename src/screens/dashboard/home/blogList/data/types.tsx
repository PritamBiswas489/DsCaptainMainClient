import { ImageSourcePropType } from "react-native";

export type BlogType = {
    blogImage: ImageSourcePropType;
    title: string;
    detail: string;
    date: string;
    author: string;
    totalPost: number;
  };