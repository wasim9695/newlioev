import { ComUsers } from "./combindUser.model";
import { Uploads } from "./upload.model";
import { itemsDetails } from "./itemsDetails.model";
import { AmountItems } from "./amountItems.model";
export class DetailCustomers {
    customer:ComUsers = new ComUsers;
    mobile_no:string;
    address:any;
    adhaar_no:number;
    adhaar_img:Uploads= new Uploads;
    item=[];
    payment:AmountItems=new AmountItems;
}