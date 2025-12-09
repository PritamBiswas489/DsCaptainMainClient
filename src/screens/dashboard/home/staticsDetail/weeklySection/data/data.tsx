export const data: Array<dataType> = [
  {item: 'newDeveloper.Yearly'},
  {item: 'newDeveloper.Monthly'},
  
];
export type dataType = {item: string};

export type activeTypes = {
  activeItem: number;
  setActiveItem: (value:number)=>void;
};
