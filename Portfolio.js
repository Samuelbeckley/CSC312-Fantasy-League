class Portfolio{

    constructor(stockName, price, quantity){
        this.stockName =  stockName;
        this.price =  price;
        this.quantity = quantity;
    }

get stockData(){
    return this.getStockData();
}


getStockData(){
    return [this.stockName,this.price,this.quantity];
}

//need helping adding an add method to 
get add(){
    return this.addStock();
}

addStock(){
    return this.push();
}

contains(){
    return null;
}

sell(){
    return this.sellStock();
}
sellStock(){
 return null;
}


}


var dummyPortfolio = new portfolio("AMZN",2168,5);




//if the new added stock is already in the portfolio, only increase stocks quantity otherwise add new stock name, price, and quantity 
if (dummyPortfolio.contains("AMZN")){
    //increase AMZN quantity 
}
else{
    dummyPortfolio.add("AMZN", price, quantity);
}




console.log(dummyPortfolio.stockData);   


//create a function for transfering stock name data into the parameter stockName
//connects alpha vantage to portfolio 
function stockNameTransfer(alphaVantageStock){
    return null;
}


//create a function for transfering the stock price data into the parameter price 
function stockPriceTransfer(alphaVantagePrice){
    return null;
}

//create a class for transfering the quantity of stock in our portfolio 
function stockPriceTransfer(alphaVantageQuantity){
    return null;
}

//when new stock purchase, add stock name, add stock price, update stock quantity. 

//if stock sold, remove stock name, remove stock price, update stock quantity. 
