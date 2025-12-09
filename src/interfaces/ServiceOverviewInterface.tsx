export interface TransactionInterface {
    id: number;
    translationable_type: string;
    translationable_id: string;
    locale: string;
    key: string;
    value: string;
}

// Define the type for the main data object
export interface ZoneInterface {
    id: string;
    name: string;
    translations: TransactionInterface[];
}

//category Interfaceface
export interface CategoryDataInterface {
    id: string;
    name: string;
    translations: TransactionInterface[];
}

//Subcategory Interface
export interface SubCategoryDataInterface {
    id: string;
    name: string;
    translations: TransactionInterface[];
}
//chart data Interface
export interface chartDataInterface{
    earnings:number[];
    expenses:number[];
    timeline:number[];
  }
  
//Amount Interface
export interface amountInterface {
    service_unit_cost: number;
    service_quantity: number;
    service_tax: number;
    discount_by_admin: number;
    discount_by_provider: number;
    coupon_discount_by_admin: number;
    coupon_discount_by_provider: number;
    campaign_discount_by_admin: number;
    campaign_discount_by_provider: number;
    admin_commission: number;
    provider_earning: number;
    year: number;
}
//Promotional cost interface
interface  promotionalCostInterface {
    discount : number,
    coupon: number,
    campaign: number
}


export interface ServiceOverViewInterface {
      zones:ZoneInterface[];
      categories:CategoryDataInterface[]; //categories
      sub_categories:SubCategoryDataInterface[]; //subcategories
      amounts : amountInterface[]; //amounts
      chart_data:chartDataInterface; //chart data
      promotional_cost:promotionalCostInterface; //promotional cost
      limit: number;
        offset: number;
        isFirstTimeLoading: boolean;
        isNoMoreData: boolean;
}
