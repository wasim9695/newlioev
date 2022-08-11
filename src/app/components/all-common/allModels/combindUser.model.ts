import { AllUsers } from "./allUsers.model";
import { Uploads } from "./upload.model";
export class ComUsers extends AllUsers {
    user: AllUsers = new AllUsers;
    mobile_no:string;
    address:any;
    adhaar_no:number;
    adhaar_img:Uploads= new Uploads;
   

}