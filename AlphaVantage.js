/*Class for the Alpha Vantage stock data API which will allow access to stock data
 *Author: Spencer Dickinson
 *Date: 4/30/20
 */

class AlphaVantage {
   // Constructor, saves the API key to allow access to updated data
   constructor() {
      console.log("Creating AlphaVantage");
      this.APIkey = 'ZS87GO7P88NNGLRR';
      //const url =
      //   'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo';
   }

   // Retrieves data from a given url, and appends the data retrieved to a specified div on the page
   requestFile(url, div) {

      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onerror = function (xhr) {
         console.log('error:', xhr);
      };
      xhr.onprogress = function (xhr) {
         console.log('bytes loaded:', xhr.loaded);
      }; /// or something
      xhr.onload = callback;
      xhr.send(null);

      function callback(xhr) {

         let response, json, lines;

         response = xhr.target.response;
         div.innerText = response;

         json = JSON.parse(response);

         console.log('json', json);

      }
   }

   // Returns the intraday data for a stock, given by their stock symbol
   getIntraDay(symbol) {
      const url = 'https://www.alphavantage.co/query?function==TIME_SERIES_INTRADAY&symbol=' + symbol +
         '&interval=1min&apikey=' + this.APIkey;

      this.requestFile(url);
   }

   // Returns the most updated data for a stock, given by their stock symbol
   getLatestData(symbol) {
      const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + symbol + '&apikey=demo' + this.APIkey;
      this.requestFile(url, divContents);
   }

   // Returns the information of the stocks most similar to the given guess of a company name or stock symbol
   getStockSymbols(text) {
      const url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + text + '&apikey=' + this.APIkey;
      this.requestFile(url, divSearch);
   }

   // Wrapper for the getLatestData method which prints to the console, then gets latest data
   getStock(stock) {
      console.log("AV: getting: " + stock);
      //quote endpoint
      this.getLatestData(stock);
   }

   // Returns latest data for a list of stocks utilizing getLatestData
   getStockList(stockList) {
      console.log("AV: getting: " + stockList);
      var i;
      for (i = 0; i < stockList.length; i++) {
         this.getLatestData(stockList[i]);
      }
   }

   // Wrapper for getStockSymbols, which prints to the console and then finds the stocks and companies closest to the guess
   searchStock(guess) {
      console.log("AV: looking for " + guess);
      this.getStockSymbols(guess);
   }
}