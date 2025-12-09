export interface foodVariationOption {
    label: string;
    optionPrice: string;  
}
  
export interface foodVariations {
    name: string;
    type: string;
    min: string;  
    max: string;  
    required: string;  
    values: foodVariationOption[];
  } 