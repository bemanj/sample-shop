export class SalesOrder {
    $id:number;  
    SONumber: string;
    SalesOrderID: number;
    OnlineOrderFlag:boolean;
    SalesOrderNumber:string;
    SubTotal:number;
    TaxAmt:number;
    Freight:number;
    TotalDue:number;
    Comment:string;

     get SONum(){
      return this.SONumber;
    }

     get SOId(){
      return this.SalesOrderID;
    }
  }

  export class SalesOrderData{
    constructor(){
      let sodata = new SalesOrder();
      sodata.SONum;
    }
    
  }