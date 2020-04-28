// SAM AND BRYAN
class Portfolio{

    // constructor(stockName, price, quantity, userCash){
    //     this.stockName =  stockName;
    //     this.price =  price;
    //     this.quantity = quantity;
    //     this.userCash = userCash;
    //     this.ownedStocks = new Array(10);
    // }

    constructor(){
        console.log("Portfolio: creating portfolio");
    }

    buy(stockName, quantity){ //doesn't yet check if already owned
      if (this.userCash >= (quantity*stockName)) {
        console.log("Portfolio: buying " + quantity + " " + stockName + " stocks");

        sLen = this.ownedStocks.length;
        this.ownedStocks[sLen] = stockName;
        this.ownedStocks[sLen+1] = quantity;
        this.userCash -= (quantity*stockName);

      } else {
        console.log("Portfolio: Not enough cash to buy" + quantity + stockName)
      }
    }

    sell(stockName, quantity){
        sLen = this.ownedStocks.length;
        for(int i = 0; i < sLen; i+=2) {
          if(this.ownedStocks[sLen] == stockName) {
            if(this.ownedStocks[sLen+1] >= quantity) { //Sale is legal
              console.log("Portfolio: selling " + quantity + " " + stockName + " stocks");
              this.ownedStocks[sLen+1] -= quantity
              if(this.ownedStocks[sLen+1] == 0) { //User now has none of that stock
                this.ownedStocks.splice(sLen, 2);
              }
            }
          }
        }

    }

    //check stock price function


// getStockData(){
//     return [this.stockName,this.price,this.quantity];
// }


// get buy(stockName, quantity){
//     return this.buyStock();
// }

// buyStock(){
//     return this.push();
// }


// sell(stockName, quantity){
//     return this.sellStock();
// }
// sellStock(){
//  return null;
// }

// balance(userCash){
//     return this.checkUserBalance();
// }

// checkUserBalance(){
// return null;
// }

// contains(){
//     return null;
// }

}


// var dummyPortfolio = new portfolio("AMZN",2168,5);


// //if the new added stock is already in the portfolio, only increase stocks quantity otherwise add new stock name, price, and quantity
// if (dummyPortfolio.contains("AMZN")){
//     //increase AMZN quantity
// }
// else{
//     dummyPortfolio.add("AMZN", price, quantity);
// }




// console.log(dummyPortfolio.stockData);


// //create a function for transfering stock name data into the parameter stockName
// //connects alpha vantage to portfolio
// function stockNameTransfer(alphaVantageStock){
//     return null;
// }


// //create a function for transfering the stock price data into the parameter price
// function stockPriceTransfer(alphaVantagePrice){
//     return null;
// }

// //create a class for transfering the quantity of stock in our portfolio
// function stockPriceTransfer(alphaVantageQuantity){
//     return null;
// }

// //when new stock purchase, add stock name, add stock price, update stock quantity.

// //if stock sold, remove stock name, remove stock price, update stock quantity.
