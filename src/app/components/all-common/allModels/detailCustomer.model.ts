import { ComUsers } from "./combindUser.model";
import { itemsDetails } from "./itemsDetails.model";
import { AmountItems } from "./amountItems.model";
export class DetailCustomers {
    customer:ComUsers = new ComUsers;
    items=[];
    payment:AmountItems=new AmountItems;
}