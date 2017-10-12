
export interface InventoryList {
    $id: number;
    PONumber: number;
    StockId: number;
    SupplierId: number;
    ProductId: number;
    Brand: string;
    Quantity: number;
    Price: number;
    AcquisitionPrice: number;
    DateDelivered: string;
    DateDisposed: string;
    ModifiedDate: string;
    PutAwayLocation: string;
    ProductName: string;
    CompanyName: string;
    CategoryID: number;
  }