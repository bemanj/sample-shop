export class SelectedProduct { 
  datePlaced: number; 
  grossAmount: number;
  taxAmount: number;
  freightAmount: number;
  discountPrice: number;
  netPrice: number;
  items: any[];

//   constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
//     this.datePlaced = new Date().getTime();

//     this.grossAmount = shoppingCart.grossPrice;
//     this.taxAmount = shoppingCart.taxAmount;
//     // this.freightAmount = shoppingCart.freight
//     this.discountPrice = shoppingCart.discountPrice;
//     this.netPrice = shoppingCart.totalPrice;
    
//     this.items = shoppingCart.items.map(i => {
//       return {
//         product: {
//           title: i.title,
//           imageUrl: i.imageUrl,
//           price: i.price
//         },
//         quantity: i.quantity,
//         totalPrice: i.totalPrice
//       }
//     })    
//   }
}