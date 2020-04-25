class AlphaVantage {
   // class methods
   constructor() {
      console.log("Creating AlphaVantage");
      this.APIkey = 'ZS87GO7P88NNGLRR';
      //const url =
      //   'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo';
   }

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

   getIntraDay(symbol) {
      const url = 'https://www.alphavantage.co/query?function==TIME_SERIES_INTRADAY&symbol=' + symbol +
         '&interval=1min&apikey=' + this.APIkey;

      this.requestFile(url);
   }

   getLatestData(symbol) {
      const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + symbol + '&apikey=demo' + this.APIkey;
      this.requestFile(url, divContents);
   }

   getStockSymbols(text) {
      const url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + text + '&apikey=' + this.APIkey;
      this.requestFile(url, divSearch);
   }

   getStock(stock) {
      console.log("AV: getting: " + stock);
      //quote endpoint
      this.getLatestData(stock);
   }

   getStockList(stockList) {
      console.log("AV: getting: " + stockList);
      var i;
      for (i = 0; i < stockList.length; i++) {
         this.getLatestData(stockList[i]);
      }
   }

   searchStock(guess) {
      console.log("AV: looking for " + guess);
      this.getStockSymbols(guess);
   }
}