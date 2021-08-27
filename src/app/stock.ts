export class Stock {
  dateTime:Date;
  stockId: number;
  symbol:string;
  openPrice:number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  volumn: number;

  getClosePrice(): string {
    return this.stockId + ' ' + this.closePrice;
  }



}
