export const subscriptionData : subscriptionType[] = [
  {
    planName:'subscription.basic',
    price:10,
},
{
    planName:'subscription.premium',
    price:30
},
{
    planName:'subscription.standard',
    price:15
}  
]

export type subscriptionType = {
    planName:string,
    price:number 
}