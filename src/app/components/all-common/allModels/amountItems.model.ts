import { paymentUploads } from "./paymentUpload.model";
export class AmountItems {
    amount:number;
    method:string;
    payment_date= new Date();
    payment_image:paymentUploads= new paymentUploads;
}