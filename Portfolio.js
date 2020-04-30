/*Sam and Bryan
CSC 312 Software Design
Code for Portfolio
4/30/20

Updates:

Description: This javascript file adds buying and selling functionality to
stock portfolios.

*/


class Portfolio{

    constructor(){
        console.log("Portfolio: creating portfolio");
    }

    /*Buys a given amount of a given stock
    *
    *@param stockName String name of stock to purchase
    *@param quantity shares of stock to purchase
    *@return None.
    */
    buy(stockName, quantity){ //doesn't yet check if already owned
      if (this.userCash >= (quantity*stockName)) {
        console.log("Portfolio: buying " + quantity + " " + stockName + " stocks");

        sLen = this.ownedStocks.length;
        this.ownedStocks[sLen] = stockName;
        this.ownedStocks[sLen+1] = quantity;
        this.userCash -= (quantity*stockName);
      } else {
        console.log("Portfolio: Not enough cash to buy" + quantity + stockName);
      }
    }
    /*Sells a given amount of a given stock
    *
    *@param stockName String name of stock to sell
    *@param quantity shares of stock to sell
    *@return None.
    */
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
}

//The code below is what our intended portfolio was originally going to be but due to time limitations we opted for the above portfolio instead

    // constructor(stockName, price, quantity, userCash){
    //     this.stockName =  stockName;
    //     this.price =  price;
    //     this.quantity = quantity;
    //     this.userCash = userCash;
    //     this.ownedStocks = new Array(10);
    // }



    //This method would have retrieved the information pertaining to the selected stock
    // getStockData(){
    //     return [this.stockName,this.price,this.quantity];
    // }

    //This method would have allowed the user to buy a stock and selected the desired quantity
    // get buy(stockName, quantity){
    //     return this.buyStock();
    // }

    // buyStock(){
    //     return this.push();
    // }

    //This method would have allowed the user to sell stocks and its quantity
    // sell(stockName, quantity){
    //     return this.sellStock();
    // }
    // sellStock(){
    //  return null;
    // }

    //This method would allow users to check their current balance
    // balance(userCash){
    //     return this.checkUserBalance();
    // }


    // checkUserBalance(){
    // return null;
    // }

    //This function would be used to check if the portfolio already contained a purchased stock
    // contains(){
    //     return null;
    // }




//var dummyPortfolio = new portfolio("AMZN",2168,5);


//if the new added stock is already in the portfolio, only increase stocks quantity otherwise add new stock name, price, and quantity
// if (dummyPortfolio.contains("AMZN")){
//     //increase AMZN quantity
// }
// else{
//     dummyPortfolio.add("AMZN", price, quantity);
// }




// console.log(dummyPortfolio.stockData);


//create a function for transfering stock name data into the parameter stockName
//connects alpha vantage to portfolio
//function stockNameTransfer(alphaVantageStock){
// return null;
// }


//create a function for transfering the stock price data into the parameter price
// function stockPriceTransfer(alphaVantagePrice){
//     return null;
// }

//create a class for transfering the quantity of stock in our portfolio
// function stockPriceTransfer(alphaVantageQuantity){
//     return null;
// }

//when new stock purchase, add stock name, add stock price, update stock quantity.

 //if stock sold, remove stock name, remove stock price, update stock quantity.
