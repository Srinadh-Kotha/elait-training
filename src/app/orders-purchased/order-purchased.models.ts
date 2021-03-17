export interface orders 
    {
        orderId : number;
        productIds : [
        {
            id : number,
            name : string,
            price : number,
        }];
        order_date : string,
        shipping_adderess : {
        street : string,
        city : string,
        state : string,
        pincode : string,
        country : string,
    }